"use client";
import { useState, useEffect } from "react";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { FaBath, FaPalette, FaCalendarAlt, FaHome } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage, FieldArray, FormikHelpers } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Head from "next/head";

// Form values interface
interface FormValues {
  fullName: string;
  address: string;
  email: string;
  phone: string;
  bathroomSize: string;
  bathroomCount: string;
  currentLayout: string[];
  removalNeeded: string;
  designStyle: string;
  materialPreferences: string;
  specialFeatures: string[];
  referenceImages: string;
  timeline: string;
  budgetRange: string;
  occupancy: string;
  // permitAssistance: boolean;
  terms: boolean;
}

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  address: Yup.string().required("Property address is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  bathroomSize: Yup.string().required("Bathroom size is required"),
  bathroomCount: Yup.string().required("Number of bathrooms is required"),
  currentLayout: Yup.array().min(1, "Select at least one layout option"),
  removalNeeded: Yup.string().required("Please specify what needs to be removed"),
  designStyle: Yup.string().required("Design style is required"),
  timeline: Yup.string().required("Timeline is required"),
  budgetRange: Yup.string().required("Budget range is required"),
  occupancy: Yup.string().required("Occupancy status is required"),
  terms: Yup.bool().oneOf([true], "You must agree to the terms and conditions"),
});

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [progress, setProgress] = useState(0);

  // Handle fade-in animations with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Calculate form progress
  const calculateProgress = (values: FormValues) => {
    const fields = [
      values.fullName,
      values.address,
      values.email,
      values.phone,
      values.bathroomSize,
      values.bathroomCount,
      values.currentLayout.length > 0 ? "currentLayout" : "",
      values.removalNeeded,
      values.designStyle,
      values.timeline,
      values.budgetRange,
      values.occupancy,
      values.terms ? "terms" : "",
    ].filter(Boolean);
    setProgress((fields.length / 12) * 100);
  };

  // API submission handler
  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    setFormStatus("submitting");
    try {
      const response = await fetch("https://dl4ltl1h1f.execute-api.us-east-1.amazonaws.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormStatus("success");
      resetForm();
      const successEl = document.getElementById("success-message");
      if (successEl) successEl.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus("error");
    }
  };

  // Initial form values
  const initialValues: FormValues = {
    fullName: "",
    address: "",
    email: "",
    phone: "",
    bathroomSize: "",
    bathroomCount: "",
    currentLayout: [],
    removalNeeded: "",
    designStyle: "",
    materialPreferences: "",
    specialFeatures: [],
    referenceImages: "",
    timeline: "",
    budgetRange: "",
    occupancy: "",
    // permitAssistance: false,
    terms: false,
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Stone Works Remodeling | Free Bathroom Remodeling Quote in Metro Detroit, MI</title>
        <meta
          name="description"
          content="Get a free consultation for stone bathroom remodeling in Metro Detroit, MI. Contact Stone Works Remodeling at (248) 346-8926 or submit our detailed form."
        />
        <meta
          name="keywords"
          content="stone bathroom remodeling Metro Detroit, bathroom renovation quote, Stone Works Remodeling contact, Metro Detroit MN bathroom remodel"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Stone Works Remodeling for Bathroom Remodeling in Metro Detroit, MI" />
        <meta
          property="og:description"
          content="Request a free quote for luxurious stone bathroom remodeling in Metro Detroit, MI. Call (248) 346-8926 or fill out our contact form."
        />
        <meta property="og:url" content="https://stoneworkremodeling.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp"
        />
        <link rel="canonical" href="https://stoneworkremodeling.com/contact" />
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Stone Works Remodeling",
              "url": "https://stoneworkremodeling.com",
              "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
              "telephone": "+12483468926",
              "email": "stoneworksremodeling8@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4671 Sugar Camp Road",
                "addressLocality": "Metro Detroit",
                "addressRegion": "MN",
                "postalCode": "55060",
                "addressCountry": "US",
              },
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact Stone Works Remodeling",
              "url": "https://stoneworkremodeling.com/contact",
              "description": "Contact Stone Works Remodeling for a free bathroom remodeling quote in Metro Detroit, MI.",
            },
          ]),
        }}
      />

      {/* Inline CSS with Gradient Adjustments */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        .form-input {
          transition: all 0.3s ease;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.95);
        }

        .form-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .form-card,
        .info-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.98);
        }

        .form-card:hover,
        .info-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .contact-icon {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .contact-icon:hover {
          transform: scale(1.2);
          color: #facc15;
        }

        .btn-primary {
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          transition: all 0.3s ease;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .btn-primary::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%) scale(0);
          border-radius: 50%;
          opacity: 0;
          transition: transform 0.5s, opacity 0.5s;
        }

        .btn-primary:hover::after {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 640px) {
          .form-button {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 fade-in"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Stone Works Remodeling
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-blue-100">
            Request a free consultation for luxurious stone bathroom remodeling in Metro Detroit, MI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg form-card fade-in"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {formStatus === "success" ? (
              <motion.div
                id="success-message"
                className="p-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submission Received!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for your inquiry. We’ll contact you within 24 hours to discuss your stone
                  bathroom remodeling project in Metro Detroit, MI.
                </p>
                <motion.button
                  onClick={() => setFormStatus("idle")}
                  className="btn-primary text-white px-8 py-3 text-base font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Another Inquiry
                </motion.button>
              </motion.div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                validateOnChange
                validateOnBlur
              >
                {({ values }) => {
                  calculateProgress(values);
                  return (
                    <Form className="space-y-8">
                      {/* Progress Indicator */}
                      <div className="relative mb-6">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <motion.div
                            className="h-2 bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-right">
                          {Math.round(progress)}% Complete
                        </p>
                      </div>

                      {/* Client Information */}
                      <div className="space-y-6 border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                          <FaHome className="mr-2 text-blue-600" />
                          Your Information
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="fullName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              name="fullName"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              placeholder="John Doe"
                              aria-required="true"
                            />
                            <ErrorMessage
                              name="fullName"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="address"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Property Address <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="text"
                              name="address"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              placeholder="123 Main St, Metro Detroit, MI"
                              aria-required="true"
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Email <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="email"
                              name="email"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              placeholder="john@example.com"
                              aria-required="true"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <Field
                              type="tel"
                              name="phone"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              placeholder="+1 (248) 346-8926"
                              aria-required="true"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Bathroom Details */}
                      <div className="space-y-6 border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                          <FaBath className="mr-2 text-blue-600" />
                          Bathroom Details
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="bathroomSize"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Bathroom Size (approx.) <span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <Field
                                type="text"
                                name="bathroomSize"
                                className="form-input block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 border pr-12"
                                placeholder="e.g., 5x8"
                                aria-required="true"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">ft²</span>
                              </div>
                            </div>
                            <ErrorMessage
                              name="bathroomSize"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="bathroomCount"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Number of Bathrooms to Remodel <span className="text-red-500">*</span>
                            </label>
                            <Field
                              as="select"
                              name="bathroomCount"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              aria-required="true"
                            >
                              <option value="">Select</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4+</option>
                            </Field>
                            <ErrorMessage
                              name="bathroomCount"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Current Layout (check all that apply) <span className="text-red-500">*</span>
                          </label>
                          <FieldArray name="currentLayout">
                            {() => (
                              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                  { id: "shower", label: "Shower" },
                                  { id: "bathtub", label: "Bathtub" },
                                  { id: "shower-tub-combo", label: "Shower/Tub Combo" },
                                  { id: "double-sink", label: "Double Sink" },
                                  { id: "separate-toilet", label: "Separate Toilet Room" },
                                  { id: "other-layout", label: "Other" },
                                ].map((option) => (
                                  <div key={option.id} className="flex items-center">
                                    <Field
                                      type="checkbox"
                                      id={option.id}
                                      name="currentLayout"
                                      value={option.id}
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                      htmlFor={option.id}
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            )}
                          </FieldArray>
                          <ErrorMessage
                            name="currentLayout"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="removalNeeded"
                            className="block text-sm font-medium text-gray-700"
                          >
                            What needs to be removed? <span className="text-red-500">*</span>
                          </label>
                          <Field
                            as="select"
                            name="removalNeeded"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            aria-required="true"
                          >
                            <option value="">Select</option>
                            <option>Everything (full demolition)</option>
                            <option>Fixtures only (keep plumbing)</option>
                            <option>Partial removal</option>
                            <option>Not sure</option>
                          </Field>
                          <ErrorMessage
                            name="removalNeeded"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      {/* Design Preferences */}
                      <div className="space-y-6 border-b border-gray-200 pb-8">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                          <FaPalette className="mr-2 text-blue-600" />
                          Design Preferences
                        </h2>
                        <div>
                          <label
                            htmlFor="designStyle"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Preferred Design Style <span className="text-red-500">*</span>
                          </label>
                          <Field
                            as="select"
                            name="designStyle"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            aria-required="true"
                          >
                            <option value="">Select style</option>
                            <option>Modern</option>
                            <option>Contemporary</option>
                            <option>Traditional</option>
                            <option>Transitional</option>
                            <option>Rustic</option>
                            <option>Farmhouse</option>
                            <option>Industrial</option>
                            <option>Not sure - need guidance</option>
                          </Field>
                          <ErrorMessage
                            name="designStyle"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="materialPreferences"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Material Preferences
                          </label>
                          <Field
                            as="textarea"
                            name="materialPreferences"
                            rows={3}
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            placeholder="e.g., marble countertops, porcelain tile, chrome fixtures..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Desired Special Features
                          </label>
                          <FieldArray name="specialFeatures">
                            {() => (
                              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                  { id: "heated-floors", label: "Heated Floors" },
                                  { id: "steam-shower", label: "Steam Shower" },
                                  { id: "smart-tech", label: "Smart Technology" },
                                  { id: "rain-shower", label: "Rain Shower" },
                                  { id: "double-vanity", label: "Double Vanity" },
                                  { id: "other-features", label: "Other" },
                                ].map((option) => (
                                  <div key={option.id} className="flex items-center">
                                    <Field
                                      type="checkbox"
                                      id={option.id}
                                      name="specialFeatures"
                                      value={option.id}
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label
                                      htmlFor={option.id}
                                      className="ml-2 block text-sm text-gray-700"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            )}
                          </FieldArray>
                        </div>
                        <div>
                          <label
                            htmlFor="referenceImages"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Inspiration Images/Reference Links
                          </label>
                          <Field
                            as="textarea"
                            name="referenceImages"
                            rows={2}
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            placeholder="Paste links to Pinterest boards, Houzz, or other inspiration..."
                          />
                        </div>
                      </div>

                      {/* Project Logistics */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                          <FaCalendarAlt className="mr-2 text-blue-600" />
                          Project Logistics
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="timeline"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Desired Timeline <span className="text-red-500">*</span>
                            </label>
                            <Field
                              as="select"
                              name="timeline"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              aria-required="true"
                            >
                              <option value="">Select timeline</option>
                              <option>ASAP</option>
                              <option>Within 1 month</option>
                              <option>1-3 months</option>
                              <option>3-6 months</option>
                              <option>Flexible</option>
                            </Field>
                            <ErrorMessage
                              name="timeline"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="budgetRange"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Budget Range <span className="text-red-500">*</span>
                            </label>
                            <Field
                              as="select"
                              name="budgetRange"
                              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                              aria-required="true"
                            >
                              <option value="">Select range</option>
                              {/* <option>$5,000 - $10,000</option>
                              <option>$10,000 - $15,000</option> */}
                              <option>$15,000 - $25,000</option>
                              <option>$25,000 - $40,000</option>
                              <option>$40,000+</option>
                              <option>Not sure - need estimate</option>
                            </Field>
                            <ErrorMessage
                              name="budgetRange"
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="occupancy"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Home Occupancy During Project <span className="text-red-500">*</span>
                          </label>
                          <Field
                            as="select"
                            name="occupancy"
                            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                            aria-required="true"
                          >
                            <option value="">Select</option>
                            <option>Full-time residents</option>
                            <option>Part-time residents</option>
                            <option>Vacant during remodel</option>
                            <option>Rental property</option>
                          </Field>
                          <ErrorMessage
                            name="occupancy"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        {/* <div className="flex items-start">
                          <Field
                            type="checkbox"
                            name="permitAssistance"
                            id="permitAssistance"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                          <div className="ml-3 text-sm">
                            <label htmlFor="permitAssistance" className="font-medium text-gray-700">
                              Will you need assistance with permits?
                            </label>
                          </div>
                        </div> */}
                        <div className="flex items-start">
                          <Field
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            aria-required="true"
                          />
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                              I agree to the{" "}
                              <a href="/terms" className="text-blue-600 hover:text-blue-500">
                                terms and conditions
                              </a>{" "}
                              <span className="text-red-500">*</span>
                            </label>
                          </div>
                          <ErrorMessage
                            name="terms"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        {formStatus === "error" && (
                          <motion.div
                            className="p-4 bg-red-100 text-red-700 rounded-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            An error occurred while submitting the form. Please try again later.
                          </motion.div>
                        )}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <button
                            type="submit"
                            disabled={formStatus === "submitting"}
                            className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
                          >
                            {formStatus === "submitting" ? (
                              <>
                                <motion.span
                                  className="mr-2"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                >
                                  <Send className="h-5 w-5" />
                                </motion.span>
                                Submitting...
                              </>
                            ) : (
                              "Request Free Consultation"
                            )}
                          </button>
                        </motion.div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg info-card fade-in"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <a
                      href="tel:+12483468926"
                      className="mt-1 text-blue-600 hover:text-blue-500"
                      aria-label="Call Stone Works Remodeling at (248) 346-8926"
                    >
                      +1 (248) 346-8926
                    </a>
                    <p className="mt-1 text-gray-600">
                      <a
                        href="mailto:stoneworksremodeling8@gmail.com"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        stoneworksremodeling8@gmail.com
                      </a>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    {/* <p className="mt-1 text-gray-600">19042 Myron st,</p> */}
                    <p className="mt-1 text-gray-600">Livonia, MI</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="mt-1 text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg info-card fade-in"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 map-container relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49843.81077263961!2d-83.41444796011216!3d42.39724162424225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b30706ba377b%3A0xd782c2371992a3fe!2sLivonia%2C%20MI%2C%20USA!5e1!3m2!1sen!2sin!4v1745780551620!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="min-h-[300px]"
                  aria-label="Map showing Stone Works Remodeling location in Metro Detroit, MI"
                ></iframe>
                <motion.div
                  className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-sm font-semibold">Visit Us in Metro Detroit</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
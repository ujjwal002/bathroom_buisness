"use client";
import { useState, useEffect, FormEvent } from "react";
import { Send, Phone, MapPin, Clock } from "lucide-react";
import { FaBath, FaRulerCombined, FaPalette, FaCalendarAlt, FaDollarSign, FaHome } from 'react-icons/fa';

// Interfaces for TypeScript
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  projectDescription: string;
  projectBudget: string;
  consent: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectDescription?: string;
  consent?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General inquiry",
    projectDescription: "",
    projectBudget: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Handle fade-in animations
  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll(".fade-in");
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 150) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form validation
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.projectDescription.trim()) errors.projectDescription = "Project description is required";
    if (!formData.consent) errors.consent = "You must agree to the privacy policy";
    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormStatus("submitting");
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General inquiry",
          projectDescription: "",
          projectBudget: "",
          consent: false,
        });
        const successEl = document.getElementById("success-message");
        if (successEl) {
          successEl.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        setFormStatus("error");
      }
    }
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .form-input {
          transition: all 0.3s ease;
          border-radius: 8px;
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
        
        .form-card, .info-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
        }
        
        .form-card:hover, .info-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
          content: '';
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
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
            We'd love to hear from you. Share your project details and budget for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg form-card fade-in">
            {formStatus === "success" ? (
              <div id="success-message" className="p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Submission Received!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Thank you for your inquiry. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="btn-primary text-white px-8 py-3 text-base font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-8">
            {/* Client Information */}
            <div className="space-y-6 border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FaHome className="mr-2 text-blue-600" />
                Your Information
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="123 Main St, City, State"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                    placeholder="+1 (555) 123-4567"
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
                  <label htmlFor="bathroom-size" className="block text-sm font-medium text-gray-700">
                    Bathroom Size (approx.) <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="bathroom-size"
                      required
                      className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 border pr-12"
                      placeholder="e.g., 5x8"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">ft²</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="bathroom-count" className="block text-sm font-medium text-gray-700">
                    Number of Bathrooms to Remodel <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="bathroom-count"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  >
                    <option value="">Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="current-layout" className="block text-sm font-medium text-gray-700">
                  Current Layout (check all that apply)
                </label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center">
                    <input
                      id="shower"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="shower" className="ml-2 block text-sm text-gray-700">
                      Shower
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="bathtub"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="bathtub" className="ml-2 block text-sm text-gray-700">
                      Bathtub
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="shower-tub-combo"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="shower-tub-combo" className="ml-2 block text-sm text-gray-700">
                      Shower/Tub Combo
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="double-sink"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="double-sink" className="ml-2 block text-sm text-gray-700">
                      Double Sink
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="separate-toilet"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="separate-toilet" className="ml-2 block text-sm text-gray-700">
                      Separate Toilet Room
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="other-layout"
                      name="current-layout"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="other-layout" className="ml-2 block text-sm text-gray-700">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="removal-needed" className="block text-sm font-medium text-gray-700">
                  What needs to be removed? <span className="text-red-500">*</span>
                </label>
                <select
                  id="removal-needed"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                >
                  <option value="">Select</option>
                  <option>Everything (full demolition)</option>
                  <option>Fixtures only (keep plumbing)</option>
                  <option>Partial removal</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>

            {/* Design Preferences */}
            <div className="space-y-6 border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FaPalette className="mr-2 text-blue-600" />
                Design Preferences
              </h2>
              
              <div>
                <label htmlFor="design-style" className="block text-sm font-medium text-gray-700">
                  Preferred Design Style <span className="text-red-500">*</span>
                </label>
                <select
                  id="design-style"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
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
                </select>
              </div>
              
              <div>
                <label htmlFor="material-preferences" className="block text-sm font-medium text-gray-700">
                  Material Preferences
                </label>
                <textarea
                  id="material-preferences"
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  placeholder="e.g., marble countertops, porcelain tile, chrome fixtures..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="special-features" className="block text-sm font-medium text-gray-700">
                  Desired Special Features
                </label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="flex items-center">
                    <input
                      id="heated-floors"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="heated-floors" className="ml-2 block text-sm text-gray-700">
                      Heated Floors
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="steam-shower"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="steam-shower" className="ml-2 block text-sm text-gray-700">
                      Steam Shower
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="smart-tech"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="smart-tech" className="ml-2 block text-sm text-gray-700">
                      Smart Technology
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="rain-shower"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="rain-shower" className="ml-2 block text-sm text-gray-700">
                      Rain Shower
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="double-vanity"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="double-vanity" className="ml-2 block text-sm text-gray-700">
                      Double Vanity
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="other-features"
                      name="special-features"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="other-features" className="ml-2 block text-sm text-gray-700">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="reference-images" className="block text-sm font-medium text-gray-700">
                  Inspiration Images/Reference Links
                </label>
                <textarea
                  id="reference-images"
                  rows={2}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  placeholder="Paste links to Pinterest boards, Houzz, or other inspiration..."
                ></textarea>
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
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                    Desired Timeline <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="timeline"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  >
                    <option value="">Select timeline</option>
                    <option>ASAP</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3-6 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget-range" className="block text-sm font-medium text-gray-700">
                    Budget Range <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="budget-range"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                  >
                    <option value="">Select range</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $15,000</option>
                    <option>$15,000 - $25,000</option>
                    <option>$25,000 - $40,000</option>
                    <option>$40,000+</option>
                    <option>Not sure - need estimate</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="occupancy" className="block text-sm font-medium text-gray-700">
                  Home Occupancy During Project <span className="text-red-500">*</span>
                </label>
                <select
                  id="occupancy"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border"
                >
                  <option value="">Select</option>
                  <option>Full-time residents</option>
                  <option>Part-time residents</option>
                  <option>Vacant during remodel</option>
                  <option>Rental property</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="permit-assistance"
                    name="permit-assistance"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="permit-assistance" className="font-medium text-gray-700">
                    Will you need assistance with permits?
                  </label>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the <a href="/terms" className="text-blue-600 hover:text-blue-500">terms and conditions</a> <span className="text-red-500">*</span>
                  </label>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Request Free Consultation
                </button>
              </div>
            </div>
          </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg info-card fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    <p className="mt-1 text-gray-600">Mon-Fri: 9am-5pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">123 Business Ave</p>
                    <p className="mt-1 text-gray-600">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600 contact-icon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="mt-1 text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-lg info-card fade-in">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.138107466955!2d-122.4194156846822!3d37.77492997975938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="min-h-[300px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





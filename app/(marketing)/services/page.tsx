"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define service type
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
  icon: string;
}

// Define services data
const services: Service[] = [
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    shortDescription: "Complete bathroom transformation services with premium materials and expert craftsmanship.",
    longDescription: "Our bathroom remodeling services transform outdated spaces into beautiful, functional areas that reflect your personal style. We handle everything from design to installation, using premium stone materials and the latest techniques to ensure a stunning result that increases your home's value.",
    features: [
      "Custom design consultations",
      "Premium selection",
      "Fixture upgrades and replacements",
      "Lighting improvements",
      "Flooring installation",
      "Waterproofing and moisture control"
    ],
    benefits: [
      "Increased home value",
      "Enhanced functionality",
      "Improved energy efficiency",
      "Better use of space",
      "Modern aesthetic appeal"
    ],
    imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
    imageAlt: "Luxury bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
    icon: "✨"
  },
  {
    id: "shower-conversions",
    title: "Tub-to-Shower Conversions",
    shortDescription: "Modern shower solutions that maximize space and accessibility.",
    longDescription: "Our tub-to-shower conversion service transforms your outdated bathtub into a stylish, accessible shower. Perfect for homeowners looking to update their bathroom's functionality while creating a more contemporary aesthetic. Our conversions are completed quickly and with minimal disruption to your home.",
    features: [
      "Custom shower designs",
      "Stone and tile options",
      "Glass door installations",
      "Accessibility features",
      "Rapid installation process",
      "Water-saving fixtures"
    ],
    benefits: [
      "Improved accessibility",
      "Easier cleaning and maintenance",
      "Modern appearance",
      "Space optimization",
      "Water conservation"
    ],
    imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
    imageAlt: "Modern shower conversion in Metro Detroit, MI by Stone Works Remodeling",
    icon: "🚿"
  },
  {
    id: "walk-in-tubs",
    title: "Walk-In Tub Installation",
    shortDescription: "Safety-focused bathroom solutions that don't compromise on luxury.",
    longDescription: "Our walk-in tub installations combine safety and luxury to create accessible bathing experiences for people of all abilities. These specialized tubs feature easy entry, comfortable seating, and therapeutic options like hydrotherapy jets. Perfect for aging in place or anyone with mobility concerns.",
    features: [
      "Low threshold entry doors",
      "Anti-slip flooring",
      "Built-in seating",
      "Hydrotherapy options",
      "Fast-fill and drain technology",
      "ADA compliant designs"
    ],
    benefits: [
      "Enhanced safety",
      "Independent bathing",
      "Therapeutic benefits",
      "Comfort and relaxation",
      "Aging-in-place solution"
    ],
    imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
    imageAlt: "Accessible walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
    icon: "🛁"
  },
  {
    id: "stone-countertops",
    title: "Stone Countertop Installation",
    shortDescription: "Beautiful, durable surfaces for bathrooms and kitchens.",
    longDescription: "Our countertop installation service brings elegance and durability to your bathroom or kitchen. We offer a wide selection of premium natural and engineered stone options, including granite, marble, quartz, and more. Each installation is precisely measured and expertly fitted for a flawless finish.",
    features: [
      "Custom measurements and templates",
      "Wide selection of materials",
      "Expert fabrication and finishing",
      "Sink and fixture coordination",
      "Sealing and maintenance education",
      "Backsplash options"
    ],
    benefits: [
      "Exceptional durability",
      "Increased home value",
      "Heat resistance",
      "Unique natural patterns",
      "Timeless elegance"
    ],
    imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/Gemini_Generated_Image_7bprdt7bprdt7bpr.webp",
    imageAlt: "Stone countertop installation in Metro Detroit, MI by Stone Works Remodeling",
    icon: "💎"
  },
];

// Define process steps
const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your vision, needs, and budget constraints.",
    longDescription: "Our expert design consultants will meet with you to discuss your ideas, preferences, and requirements. We'll take measurements, assess your space, and help you envision the possibilities.",
    icon: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp"
  },
  {
    step: 2,
    title: "Design",
    description: "Our designers create custom plans tailored specifically to your space and preferences.",
    longDescription: "Using advanced design software, we'll create detailed 3D renderings and plans for your approval. This helps you visualize the end result before any work begins.",
    icon: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp"
  },
  {
    step: 3,
    title: "Material Selection",
    description: "Choose from our curated selection of premium materials, fixtures, and finishes.",
    longDescription: "Visit our showroom to touch and feel the materials that will transform your space. Our experts will guide you through options that match your design preferences and budget.",
    icon: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp"
  },
  {
    step: 4,
    title: "Installation",
    description: "Our skilled craftsmen execute the project with precision, cleanliness, and respect for your home.",
    longDescription: "Our certified installers work efficiently to minimize disruption to your daily life. We maintain a clean worksite and communicate progress throughout the installation.",
    icon: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp"
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description: "We inspect the completed project together to ensure your complete satisfaction.",
    longDescription: "Once the project is complete, we'll walk through the finished space with you, explain maintenance requirements, and address any questions or concerns.",
    icon: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp"
  }
];

// Define Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  project: string;
}

// Define testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer L.",
    location: "Metro Detroit, MI",
    quote: "The bathroom remodeling team exceeded all my expectations. They transformed my outdated bathroom into a modern spa-like retreat. The attention to detail was impressive!",
    rating: 5,
    image: "/api/placeholder/60/60",
    project: "Master Bathroom Remodel"
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Metro Detroit, MI",
    quote: "We had our tub converted to a walk-in shower and couldn't be happier with the results. The team was professional, clean, and completed the project ahead of schedule.",
    rating: 5,
    image: "/api/placeholder/60/60",
    project: "Tub-to-Shower Conversion"
  },
  {
    id: 3,
    name: "Sarah K.",
    location: "Metro Detroit, MI",
    quote: "Installing a walk-in tub for my mother was the best decision. The team was sensitive to our needs and created a safe, beautiful solution that has given her independence back.",
    rating: 5,
    image: "/api/placeholder/60/60",
    project: "Walk-in Tub Installation"
  },
  {
    id: 4,
    name: "David R.",
    location: "Metro Detroit, MI",
    quote: "The  countertops they installed are absolutely stunning. The craftsmanship is impeccable, and they were able to match our existing decor perfectly.",
    rating: 5,
    image: "/api/placeholder/60/60",
    project: " Countertop Installation"
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<string>("bathroom-remodeling");
  // const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>Premium Bathroom Remodeling Services | Stone Works Remodeling | Metro Detroit, MI</title>
        <meta name="description" content="Transform your bathroom with our professional remodeling services including custom designs, shower conversions, walk-in tubs, and premium stone installations in Metro Detroit, Michigan." />
        <meta name="keywords" content="bathroom remodeling, shower conversion, walk-in tub, countertops, Metro Detroit, Michigan, Stone Works Remodeling, luxury bathroom" />
        <meta property="og:title" content="Premium Bathroom Remodeling Services | Stone Works Remodeling" />
        <meta property="og:description" content="Experience the finest bathroom remodeling services in Metro Detroit, featuring custom designs, luxury materials, and expert craftsmanship." />
        <meta property="og:image" content={services[0].imageSrc} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Stone Works Remodeling",
              "description": "Premium bathroom remodeling services in Metro Detroit, Michigan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Metro Detroit",
                "addressRegion": "MN",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.0839",
                "longitude": "-93.2260"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bathroom Remodeling Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Bathroom Remodeling"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tub-to-Shower Conversions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Walk-In Tub Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Stone Countertop Installation"
                    }
                  }
                ]
              },
              "image": "${services[0].imageSrc}",
              "priceRange": "$$$",
              "telephone": "+15071234567",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "87"
              }
            }
          `}
        </script>
      </Head>


      <main>
        {/* Hero Section with Video Background */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>
            <div className="relative h-full w-full">
              <Image
                src={services[0].imageSrc}
                alt="Premium bathroom remodeling services"
                layout="fill"
                objectFit="cover"
                priority
                quality={90}
              />
              {/* Optional: Add a subtle animation overlay */}
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20"></div>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Transform Your <span className="text-blue-300">Bathroom</span> Into Something Extraordinary
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Premium  remodeling services that combine beautiful design, expert craftsmanship, and exceptional materials to create spaces you&apos;ll love for years to come.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <p className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                    Schedule a Consultation
                  </p>
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-black border border-white border-opacity-30 rounded-lg font-medium hover:bg-opacity-30 transition-all"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-16">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">200+</div>
                  <div className="text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">10+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Section with Interactive Display */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Expertise</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Premium Remodeling Services</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                We offer a comprehensive range of high-quality bathroom remodeling services,
                each delivered with exceptional craftsmanship and attention to detail.
              </p>
            </motion.div>

            {/* Service tabs navigation */}
            <div className="flex flex-wrap justify-center mb-12 gap-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${activeService === service.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                    }`}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.title}
                </button>
              ))}
            </div>

            {/* Service content display */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {services.map((service) => (
                activeService === service.id && (
                  <React.Fragment key={service.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-lg text-gray-600">{service.longDescription}</p>

                      <div>
                        <h4 className="font-bold text-lg mb-4 text-blue-600">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-4 text-blue-600">Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href={`/contact?service=${service.id}`}>
                          <p className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                            Get a Personalized Quote
                          </p>
                        </Link>
                        <Link href="/gallery">
                          <p className="inline-block px-6 py-4 ml-4 text-blue-600 font-medium hover:text-blue-800 transition-colors">
                            View Projects <span aria-hidden="true">→</span>
                          </p>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl overflow-hidden shadow-xl"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={service.imageSrc}
                          alt={service.imageAlt}
                          layout="fill"
                          objectFit="cover"
                          quality={90}
                          className="transform transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  </React.Fragment>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Interactive Timeline */}
        <section id="process" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold uppercase tracking-wider">How We Work</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Remodeling Process</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Our streamlined process ensures a smooth experience from initial consultation through final inspection.
              </p>
            </motion.div>

            {/* Interactive Timeline */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Timeline navigation */}
              <div className="mb-8 sm:mb-12 relative">
                <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                  {processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex-1 relative sm:flex sm:flex-col sm:items-center"
                      onClick={() => setActiveStep(step.step)}
                    >
                      <div
                        className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto relative z-10 cursor-pointer
                  transition-all duration-300 text-sm sm:text-base
                  ${activeStep === step.step
                            ? "bg-blue-600 text-white scale-110 sm:scale-125"
                            : "bg-white text-blue-600 border-2 border-blue-600"
                          }
                `}
                      >
                        {step.step}
                      </div>
                      <div
                        className={`
                  text-center mt-2 sm:mt-4 font-medium transition-all duration-300 text-sm sm:text-base
                  ${activeStep === step.step ? "text-blue-600 scale-105" : "text-gray-500"}
                `}
                      >
                        {step.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active step content */}
              {processSteps.map((step) => (
                activeStep === step.step && (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col gap-6 sm:gap-8">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                          <Image
                            src={step.icon}
                            alt={`Step ${step.step} icon`}
                            width={32}
                            height={32}
                            className="object-cover"
                            sizes="(max-width: 640px) 32px, 40px"
                            loading="lazy"
                            quality={75}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                          Step {step.step}: {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{step.longDescription}</p>

                        {step.step < processSteps.length ? (
                          <button
                            onClick={() => setActiveStep(step.step + 1)}
                            className="text-blue-600 font-medium hover:text-blue-800 flex items-center text-sm sm:text-base"
                          >
                            Next Step
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        ) : (
                          <Link href="/contact">
                            <p className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
                              Start Your Project
                            </p>
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section id="testimonials" className="py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Client Stories</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeTestimonialIndex * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="min-w-full px-4"
                      >
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                          <div className="flex justify-center mb-6">
                            {[...Array(testimonial.rating)].map((_, idx) => (
                              <svg
                                key={idx}
                                className="w-6 h-6 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.885 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-lg text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                          <div className="flex justify-center items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                              <Image
                                src={testimonial.image}
                                alt={`Testimonial from ${testimonial.name}`}
                                width={60}
                                height={60}
                                objectFit="cover"
                              />
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.location}</p>
                              <p className="text-sm text-blue-600">{testimonial.project}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Carousel navigation dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonialIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonialIndex === index
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Carousel navigation arrows */}
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/testimonials">
                <p className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Read More Client Stories
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Your Questions, Answered
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How long does a typical bathroom remodel take?",
                  answer:
                    "The timeline depends on the scope of the project, but most bathroom remodels take 2-4 weeks from start to finish. We'll provide a detailed timeline during the consultation.",
                },
                {
                  question: "What types of materials do you use?",
                  answer:
                    "We use premium natural and engineered stones like granite, marble, and quartz, along with high-quality fixtures and finishes from trusted brands.",
                },
                {
                  question: "Do you offer financing options?",
                  answer:
                    "Yes, we partner with trusted financing providers to offer flexible payment plans. Contact us for more details.",
                },
                {
                  question: "Can you work with my budget?",
                  answer:
                    "Absolutely. We offer customizable solutions to fit a range of budgets while maintaining our high standards of quality and craftsmanship.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Bathroom?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contact Stone Works Remodeling today to schedule your consultation
                and start creating the bathroom of your dreams.
              </p>
              <Link href="/contact">
                <p className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg">
                  Get Started Now
                </p>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>


    </>
  );
}
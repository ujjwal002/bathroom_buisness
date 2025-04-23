"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Star, Check, Phone, ArrowRight, Clock, ChevronRight, Shield, Award, ThumbsUp, ArrowDown } from 'lucide-react';
import Image from 'next/image';
// SEO metadata component
function SEOMetadata() {
  return (
    <>
      <title>stone work remodeling | Premium Bathroom Remodeling Services</title>
      <meta name="description" content="stone work remodeling offers high-quality bathroom remodeling, tub replacement, shower conversion, and walk-in tub installation. Get your free quote today!" />
      <meta name="keywords" content="bathroom remodeling, tub replacement, shower conversion, walk-in tubs, bathroom renovation" />
      <meta property="og:title" content="stone work remodeling | Premium Bathroom Remodeling Services" />
      <meta property="og:description" content="Transform your bathroom with our professional remodeling services. Free quotes and financing available." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stone work remodeling.com" />
      <meta property="og:image" content="https://stone work remodeling.com/images/og-image.jpg" />
      <link rel="canonical" href="https://stone work remodeling.com" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "stone work remodeling",
            "image": "https://stone work remodeling.com/images/logo.png",
            "url": "https://stone work remodeling.com",
            "telephone": "+1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Anytown",
              "addressRegion": "CA",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.7749,
              "longitude": -122.4194
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/stone work remodeling",
              "https://www.instagram.com/stone work remodeling",
              "https://www.linkedin.com/company/stone work remodeling"
            ]
          }
        `}
      </script>
    </>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('before-after');

  const testimonials = [
    {
      id: 1,
      name: "Jennifer L.",
      location: "San Diego, CA",
      quote: "stone work remodeling transformed our outdated bathroom into a modern oasis. Their attention to detail and quality craftsmanship exceeded our expectations. The project was completed on time and within budget!",
      rating: 5,
      image: "/api/placeholder/80/80",
      projectType: "Complete Bathroom Remodel"
    },
    {
      id: 2,
      name: "Michael T.",
      location: "Portland, OR",
      quote: "We needed a walk-in tub for my aging mother, and stone work remodeling made the process incredibly simple. Their design consultant was knowledgeable and helped us choose the perfect solution. Installation was fast and professional.",
      rating: 5,
      image: "/api/placeholder/80/80",
      projectType: "Walk-in Tub Installation"
    },
    {
      id: 3,
      name: "Rachel K.",
      location: "Austin, TX",
      quote: "After comparing several contractors, we chose stone work remodeling for our shower conversion project. It was the best decision we could have made! Quality materials, expert installation, and outstanding customer service.",
      rating: 5,
      image: "/api/placeholder/80/80",
      projectType: "Tub-to-Shower Conversion"
    },
  ];

  const customerImages = [
    'https://www.stoneworksremodeling.com/assets/images/customer/user1.png',
    'https://www.stoneworksremodeling.com/assets/images/customer/user2.png',
    'https://www.stoneworksremodeling.com/assets/images/customer/user3.png',
    'https://www.stoneworksremodeling.com/assets/images/customer/user4.png',
    'https://www.stoneworksremodeling.com/assets/images/customer/user5.png',
  ];

  const faqs = [
    {
      question: "How long does a typical bathroom remodel take?",
      answer: "While every project is unique, most standard bathroom remodels are completed within 5-7 business days. Larger projects or custom designs may take 2-3 weeks. During your free consultation, we'll provide a specific timeline for your project."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes! We offer flexible financing options including 0% interest for 12 months (for qualified buyers), as well as other payment plans to fit your budget. Our consultants can explain all available options during your free quote appointment."
    },
    {
      question: "Are your products and installations covered by warranty?",
      answer: "Absolutely. All of our products come with manufacturer warranties, and we provide a comprehensive labor warranty on all installations. Our limited lifetime warranty covers both materials and workmanship, giving you peace of mind."
    },
    {
      question: "Do I need to obtain permits for my bathroom remodel?",
      answer: "Most bathroom remodeling projects require permits, but don't worry! Our team handles all permitting processes for you as part of our comprehensive service. We ensure all work meets or exceeds local building codes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import SEO component */}
      <SEOMetadata />

      {/* Header Component */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-pattern-grid z-0"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Bathroom <br className="hidden md:block" />
                <span className="text-blue-200">Into a Luxurious Retreat</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Professional bathroom remodeling services tailored to your style,
                budget, and timeline. Quality craftsmanship with a satisfaction guarantee.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link href="tel:+12483468926" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (248) 346-8926
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {customerImages.map((src, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white bg-blue-300 overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={`Customer ${index + 1}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm mt-1">Over 500+ satisfied customers</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="bg-white p-1 rounded-lg shadow-2xl transform rotate-1 w-full">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.png"
                  alt="Modern bathroom remodel"
                  className="w-full h-auto rounded-md"
                  width={500}  // Set the width for the image
                  height={300}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl transform -rotate-3 w-48">
                <div className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold text-gray-900">Completed in 5 days</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold text-gray-900">Under budget</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <a href="#services" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium mb-2">Explore Our Services</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-6 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-gray-700 font-medium">On-Time Completion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Bathroom Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete bathroom remodels to targeted upgrades, our expert team delivers
              exceptional results tailored to your specific needs and style preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.png"
                  alt="Complete Bathroom Remodeling"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Complete Bathroom Remodeling</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Transform your entire bathroom with our comprehensive remodeling services.
                  From floors to fixtures, we handle every aspect with expert craftsmanship.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom design services</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Premium fixtures and materials</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Complete project management</span>
                  </li>
                </ul>
                <Link
                  href="/services/bathroom-remodeling"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group/link"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/_QE_wu8yh888nrX1JUzYt.png"
                  alt="Tub Replacement"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={500}  // Set the width for the image
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Tub Replacement</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Upgrade your bathtub with a modern, stylish replacement that enhances both
                  the look and functionality of your bathroom space.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Wide selection of styles</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Fast, professional installation</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Durable, easy-clean materials</span>
                  </li>
                </ul>
                <Link
                  href="/services/tub-replacement"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group/link"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/2gOE7M5Mw4F9ecfLC92pQ.png"
                  alt="Shower Conversion"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={500}  // Set the width for the image
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Shower Conversion</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Convert your outdated tub into a spacious, modern shower that maximizes
                  space and provides a refreshing bathing experience.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Tub-to-shower conversions</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Custom glass enclosures</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Safety features available</span>
                  </li>
                </ul>
                <Link
                  href="/services/shower-conversion"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group/link"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/w6HJzxSeslcbuk0sJgPQc.png"
                  alt="Walk-in Tubs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={500}  // Set the width for the image
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">Walk-in Tubs</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Enhance bathroom safety and accessibility with our premium walk-in tubs,
                  designed for comfort and independence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Safety-focused design</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Therapeutic jet options</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Quick-drain technology</span>
                  </li>
                </ul>
                <Link
                  href="/services/walk-in-tubs"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center group/link"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&#39;ve streamlined our approach to make your bathroom transformation as
              smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Consultation</h3>
                <p className="text-gray-600">
                  Schedule your free in-home consultation with our design experts. We&#39;ll discuss your
                  vision, measure your space, and answer any questions.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Design</h3>
                <p className="text-gray-600">
                  Our designers create a customized plan based on your preferences, budget, and space
                  requirements, complete with 3D renderings.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Installation</h3>
                <p className="text-gray-600">
                  Our licensed and insured professionals handle all aspects of installation with
                  meticulous attention to detail and quality.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 h-full">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Final Walkthrough</h3>
                <p className="text-gray-600">
                  We&#39;ll walk you through your new bathroom, ensure everything meets your expectations,
                  and provide care instructions for lasting beauty.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Schedule Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Stunning Transformations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference our expert craftsmanship can make in these real customer projects.
            </p>
          </div>

          {/* Gallery Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'before-after' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                onClick={() => setActiveTab('before-after')}
              >
                Before & After
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'recent-projects' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                onClick={() => setActiveTab('recent-projects')}
              >
                Recent Projects
              </button>
            </div>
          </div>

          {/* Before & After Gallery */}
          {activeTab === 'before-after' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Before & After 1 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/Gemini_Generated_Image_7bprdt7bprdt7bpr.jpeg"
                    alt="Before bathroom remodel"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg"
                    alt="After bathroom remodel"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">AFTER</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Master Bathroom Renovation</h3>
                  <p className="text-gray-600 text-sm">Complete remodel with custom shower, premium tile, and modern fixtures</p>
                </div>
              </div>

              {/* Before & After 2 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image+(2).jpg"
                    alt="Before tub replacement"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/_QE_wu8yh888nrX1JUzYt.png"
                    alt="After tub replacement"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">AFTER</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Shower Conversion</h3>
                  <p className="text-gray-600 text-sm">Tub-to-shower conversion with frameless                  glass and non-slip flooring
                  </p>
                </div>
              </div>

              {/* Before & After 3 */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image+(1).jpg"
                    alt="Before walk-in tub"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="relative">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/_QE_wu8yh888nrX1JUzYt.png"
                    alt="After walk-in tub"
                    className="w-full h-48 object-cover"
                    width={500}  // Set the width for the image
                    height={300}
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">AFTER</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Walk-in Tub Installation</h3>
                  <p className="text-gray-600 text-sm">Accessible walk-in tub with therapeutic jets and safety features</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Recent Projects Gallery */}
        {activeTab === 'recent-projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-6 lg:px-8">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/NctOfmDbqGoQGM2Qm9a8C.png"
                alt="Recent bathroom remodel"
                className="w-full h-48 object-cover"
                width={500}  // Set the width for the image
                height={300}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Luxury Master Suite</h3>
                <p className="text-gray-600 text-sm">Spa-inspired bathroom with freestanding tub and smart fixtures</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/i5a_set3C7bnEDegPuZld.png"
                alt="Recent shower conversion"
                className="w-full h-48 object-cover"
                width={500}  // Set the width for the image
                height={300}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Modern Shower Upgrade</h3>
                <p className="text-gray-600 text-sm">Sleek tub-to-shower conversion with rainfall showerhead</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/krY1iLp90R9l3kcrrUhu-.png"
                alt="Recent walk-in tub"
                className="w-full h-48 object-cover"
                width={500}  // Set the width for the image
                height={300}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Accessible Bathroom</h3>
                <p className="text-gray-600 text-sm">Walk-in tub with grab bars and custom seating</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
          >
            View Full Gallery
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from homeowners who have transformed their bathrooms with stone work remodeling’s expert services.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-lg shadow-md p-8 transition-all duration-300 ${activeTestimonial === index ? 'border-2 border-blue-600 scale-105' : 'opacity-80'
                    }`}
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      width={500}  // Set the width for the image
                      height={300}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 italic">{testimonial.projectType}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Read More Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We’ve got answers. Here are some of the most common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="w-full text-left flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    const current = activeTab === `faq-${index}` ? '' : `faq-${index}`;
                    setActiveTab(current);
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-600 transform transition-transform ${activeTab === `faq-${index}` ? 'rotate-90' : ''
                      }`}
                  />
                </button>
                {activeTab === `faq-${index}` && (
                  <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View All FAQs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Bathroom?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule your free consultation today and take the first step toward your dream bathroom.
            Our team is here to make your vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              (248) 346-8926
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>

  );
}
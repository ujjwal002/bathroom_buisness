"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Check, Phone, ArrowRight, Clock, ChevronRight, Shield, Award, ThumbsUp, ArrowDown, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy-load gallery images for performance
const DynamicGalleryImage = dynamic(() => import("next/image"), { ssr: false });

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <title>Stone Work Remodeling | Premium Stone Bathroom Remodeling in Owatonna, MN</title>
      <meta
        name="description"
        content="Stone Work Remodeling specializes in premium stone bathroom remodeling, shower conversions, walk-in tubs, and custom designs in Owatonna, MN. Free quotes and financing available!"
      />
      <meta
        name="keywords"
        content="stone bathroom remodeling Owatonna, bathroom renovation Minnesota, stone shower conversion, walk-in tubs Owatonna, custom stone bathroom design, premium bathroom remodel"
      />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Stone Work Remodeling" />
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Owatonna, Minnesota" />
      <meta name="geo.position" content="44.083996;-93.225996" />
      <meta name="ICBM" content="44.083996, -93.225996" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Stone Work Remodeling | Premium Stone Bathroom Remodeling in Owatonna, MN" />
      <meta
        property="og:description"
        content="Transform your bathroom with Stone Work Remodeling’s expert stone-based designs, shower conversions, and walk-in tubs in Owatonna, MN. Free quotes and financing available."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stoneworkremodeling.com" />
      <meta
        property="og:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta property="og:image:alt" content="Modern stone bathroom remodel by Stone Work Remodeling in Owatonna, MN" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Stone Work Remodeling" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stone Work Remodeling | Premium Stone Bathroom Remodeling in Owatonna, MN" />
      <meta
        name="twitter:description"
        content="Transform your bathroom with Stone Work Remodeling’s expert stone-based designs in Owatonna, MN."
      />
      <meta
        name="twitter:image"
        content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.webp"
      />
      <meta name="twitter:image:alt" content="Modern stone bathroom remodel by Stone Work Remodeling in Owatonna, MN" />

      <link rel="canonical" href="https://stoneworkremodeling.com" />
      <link rel="icon" href="/favicon.ico" />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Stone Work Remodeling",
              "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.webp",
              "url": "https://stoneworkremodeling.com",
              "telephone": "+12483468926",
              "email": "info@stoneworkremodeling.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4671 Sugar Camp Road",
                "addressLocality": "Owatonna",
                "addressRegion": "MN",
                "postalCode": "55060",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.083996,
                "longitude": -93.225996,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "00:00",
                },
              ],
              "areaServed": [
                { "@type": "City", "name": "Owatonna", "sameAs": "https://en.wikipedia.org/wiki/Owatonna,_Minnesota" },
                { "@type": "City", "name": "Rochester", "sameAs": "https://en.wikipedia.org/wiki/Rochester,_Minnesota" },
                { "@type": "City", "name": "Faribault", "sameAs": "https://en.wikipedia.org/wiki/Faribault,_Minnesota" },
              ],
              "sameAs": [
                "https://www.facebook.com/stoneworkremodeling",
                "https://www.instagram.com/stoneworkremodeling",
                "https://www.linkedin.com/company/stoneworkremodeling",
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "500",
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Complete Bathroom Remodeling",
                  "description": "Comprehensive stone bathroom remodeling with custom designs in Owatonna, MN",
                  "url": "https://stoneworkremodeling.com/services/bathroom-remodeling",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/mHSA0TExdMsQjnyxRC3Wq.webp",
                },
                {
                  "@type": "Offer",
                  "name": "Shower Conversion",
                  "description": "Tub-to-shower conversions with stone finishes in Owatonna, MN",
                  "url": "https://stoneworkremodeling.com/services/shower-conversion",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/2gOE7M5Mw4F9ecfLC92pQ.webp",
                },
                {
                  "@type": "Offer",
                  "name": "Walk-in Tubs",
                  "description": "Accessible walk-in tubs with safety features in Owatonna, MN",
                  "url": "https://stoneworkremodeling.com/services/walk-in-tubs",
                  "image": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/w6HJzxSeslcbuk0sJgPQc.webp",
                },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does a typical bathroom remodel take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most standard bathroom remodels are completed within 5-7 business days. Larger projects or custom stone designs may take 2-3 weeks.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do you offer financing options?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer flexible financing options including 0% interest for 12 months for qualified buyers in Owatonna, MN.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Are your products and installations covered by warranty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All products come with manufacturer warranties, and we provide a limited lifetime warranty on materials and workmanship.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do I need to obtain permits for my bathroom remodel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our team handles all permitting processes to ensure compliance with Owatonna, MN building codes.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Stone Work Remodeling</h3>
            <p className="text-gray-400">
              Transforming bathrooms with premium stone designs in Owatonna, MN.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              <Phone className="inline h-5 w-5 mr-2" />
              <a href="tel:+12483468926">+1 (248) 346-8926</a>
            </p>
            <p className="text-gray-400">
              <MapPin className="inline h-5 w-5 mr-2" />
              4671 Sugar Camp Road, Owatonna, MN 55060
            </p>
            <p className="text-gray-400">
              <Clock className="inline h-5 w-5 mr-2" />
              Mon-Fri: 9:00 AM - 5:00 PM
              <br />
              Sat-Sun: Closed
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2025 Stone Work Remodeling. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState("before-after");

  // Updated testimonials with local focus
  const testimonials = [
    {
      id: 1,
      name: "Jennifer L.",
      location: "Owatonna, MN",
      quote:
        "Stone Work Remodeling transformed our outdated bathroom into a stunning stone oasis. Their craftsmanship and attention to detail were exceptional!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      projectType: "Complete Stone Bathroom Remodel",
      alt: "Jennifer L., satisfied Stone Work Remodeling customer in Owatonna, MN",
    },
    {
      id: 2,
      name: "Michael T.",
      location: "Rochester, MN",
      quote:
        "We needed a walk-in tub for accessibility, and Stone Work Remodeling delivered a perfect solution with professional installation. Highly recommend!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
      projectType: "Walk-in Tub Installation",
      alt: "Michael T., Stone Work Remodeling walk-in tub client in Rochester, MN",
    },
    {
      id: 3,
      name: "Rachel K.",
      location: "Faribault, MN",
      quote:
        "Stone Work Remodeling’s shower conversion was flawless. The stone finishes and custom design made our bathroom feel luxurious!",
      rating: 5,
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
      projectType: "Tub-to-Shower Conversion",
      alt: "Rachel K., Stone Work Remodeling shower conversion client in Faribault, MN",
    },
  ];

  // Customer images (from previous optimization)
  interface CustomerImage {
    src: string;
    alt: string;
    role: string;
    blurDataURL: string; // Added required blurDataURL property

  }

  const customerImages: CustomerImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      alt: "Satisfied Stone Work Remodeling customer in Owatonna, MN",
      role: "Satisfied homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      alt: "Recent Stone Work Remodeling client for bathroom remodel",
      role: "Recent client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
      alt: "Stone Work Remodeling customer for shower conversion",
      role: "Shower conversion client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      alt: "Stone Work Remodeling homeowner in Minnesota",
      role: "Homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
      alt: "Stone Work Remodeling walk-in tub installation client",
      role: "Walk-in tub client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];
  

  // Gallery images with optimized metadata
  interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL: string;
  }

  const beforeAfterImages: GalleryImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/Gemini_Generated_Image_7bprdt7bprdt7bpr.webp",
      alt: "Before stone bathroom remodel in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image.webp",
      alt: "After stone bathroom remodel in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image+(2).webp",
      alt: "Before tub-to-shower conversion in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/_QE_wu8yh888nrX1JUzYt.webp",
      alt: "After tub-to-shower conversion in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image+(1).webp",
      alt: "Before walk-in tub installation in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/w6HJzxSeslcbuk0sJgPQc.webp",
      alt: "After walk-in tub installation in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];

  const recentProjects: GalleryImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
      alt: "Luxury stone bathroom remodel in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
      alt: "Modern stone shower conversion in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
      alt: "Accessible walk-in tub installation in Owatonna, MN by Stone Work Remodeling",
      width: 500,
      height: 300,
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];

  // FAQs with local context
  const faqs = [
    {
      question: "How long does a typical stone bathroom remodel take in Owatonna, MN?",
      answer:
        "Most standard stone bathroom remodels are completed within 5-7 business days. Larger projects or custom designs may take 2-3 weeks. We provide a specific timeline during your free Owatonna consultation.",
    },
    {
      question: "Do you offer financing options for bathroom remodeling in Minnesota?",
      answer:
        "Yes! We offer flexible financing options, including 0% interest for 12 months for qualified buyers in Owatonna, MN, and surrounding areas like Rochester and Faribault.",
    },
    {
      question: "Are your stone products and installations covered by warranty?",
      answer:
        "All stone products come with manufacturer warranties, and we provide a limited lifetime warranty on materials and workmanship for projects in Owatonna, MN.",
    },
    {
      question: "Do I need permits for a bathroom remodel in Owatonna, MN?",
      answer:
        "Most bathroom remodeling projects require permits. Our team handles all permitting processes to ensure compliance with Owatonna, MN, building codes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOMetadata />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute inset-0 bg-pattern-grid z-0"></div>
          </div>

          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                >
                  Transform Your Bathroom in Owatonna, MN <br className="hidden md:block" />
                  <span className="text-blue-200">Into a Luxurious Stone Retreat</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-blue-100">
                  Expert stone bathroom remodeling services tailored to your style and budget in
                  Owatonna, MN. Quality craftsmanship with a satisfaction guarantee.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="tel:+12483468926"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (248) 346-8926
                  </Link>
                </div>

                <div className="flex items-center space-x-4" aria-label="Customer testimonials">
                  <div className="flex -space-x-2">
                    {customerImages.map((image) => (
                      <div
                        key={image.src}
                        className="w-10 h-10 rounded-full border-2 border-white bg-blue-300 overflow-hidden relative"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={40}
                          height={40}
                          className="object-cover"
                          sizes="40px"
                          placeholder="blur"
                          blurDataURL={image.blurDataURL}
                          loading="lazy"
                          quality={75}
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
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
                    alt="Modern stone bathroom remodel by Stone Work Remodeling in Owatonna, MN"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-md object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                    quality={85}
                    priority
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

          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <a
              href="#services"
              className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="text-sm font-medium mb-2">Explore Our Services</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-6 bg-gray-50 border-b border-gray-100" aria-label="Trust indicators">
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
        <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Stone Bathroom Services in Owatonna, MN
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From complete stone bathroom remodels to walk-in tubs, our expert team delivers
                exceptional results in Owatonna, MN.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1: Complete Bathroom Remodeling */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/mHSA0TExdMsQjnyxRC3Wq.webp"
                    alt="Complete stone bathroom remodeling by Stone Work Remodeling in Owatonna, MN"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Complete Bathroom Remodeling
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Transform your bathroom with our comprehensive stone remodeling services in
                    Owatonna, MN, featuring custom stone tiles and fixtures.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Custom stone design services</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Premium stone fixtures</span>
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

              {/* Service 2: Tub Replacement */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/_QE_wu8yh888nrX1JUzYt.webp"
                    alt="Stone tub replacement by Stone Work Remodeling in Owatonna, MN"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Stone Tub Replacement
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Upgrade your bathtub with a modern stone replacement in Owatonna, MN, enhancing
                    both style and functionality.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Wide selection of stone styles</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Fast, professional installation</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Durable, easy-clean stone materials</span>
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

              {/* Service 3: Shower Conversion */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/2gOE7M5Mw4F9ecfLC92pQ.webp"
                    alt="Stone shower conversion by Stone Work Remodeling in Owatonna, MN"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Stone Shower Conversion
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Convert your tub into a spacious stone shower in Owatonna, MN, with custom
                    designs and safety features.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Tub-to-shower conversions</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Custom stone enclosures</span>
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

              {/* Service 4: Walk-in Tubs */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/w6HJzxSeslcbuk0sJgPQc.webp"
                    alt="Accessible walk-in tub by Stone Work Remodeling in Owatonna, MN"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                    quality={80}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                    Walk-in Tubs
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Enhance bathroom safety with premium walk-in tubs in Owatonna, MN, designed for
                    comfort and accessibility.
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
        <section className="py-20 bg-gray-50" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="process-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Simple 4-Step Stone Remodeling Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We make your stone bathroom transformation in Owatonna, MN, smooth and stress-free.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Free Consultation</h3>
                  <p className="text-gray-600">
                    Schedule a free in-home consultation in Owatonna, MN, to discuss your stone
                    bathroom vision.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Stone Design</h3>
                  <p className="text-gray-600">
                    Our designers create a custom stone bathroom plan with 3D renderings for your
                    Owatonna home.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Stone Installation</h3>
                  <p className="text-gray-600">
                    Our licensed professionals install your stone bathroom with precision in Owatonna,
                    MN.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-1/2 left-full h-1 w-24 bg-blue-200 transform -translate-y-1/2 translate-x-4"></div>
              </div>

              <div>
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Final Walkthrough</h3>
                  <p className="text-gray-600">
                    We ensure your new stone bathroom in Owatonna, MN, meets your expectations with a
                    detailed walkthrough.
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
        <section className="py-20 bg-white" aria-labelledby="gallery-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Stone Bathroom Transformations in Owatonna, MN
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore real stone bathroom projects showcasing our craftsmanship in Owatonna, MN.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "before-after"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("before-after")}
                >
                  Before & After
                </button>
                <button
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "recent-projects"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("recent-projects")}
                >
                  Recent Projects
                </button>
              </div>
            </div>

            {activeTab === "before-after" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    before: beforeAfterImages[0],
                    after: beforeAfterImages[1],
                    title: "Master Stone Bathroom Renovation",
                    desc: "Complete stone remodel with custom shower and premium tiles in Owatonna, MN",
                  },
                  {
                    before: beforeAfterImages[2],
                    after: beforeAfterImages[3],
                    title: "Stone Shower Conversion",
                    desc: "Tub-to-shower conversion with stone finishes and non-slip flooring in Owatonna, MN",
                  },
                  {
                    before: beforeAfterImages[4],
                    after: beforeAfterImages[5],
                    title: "Accessible Walk-in Tub",
                    desc: "Stone walk-in tub with therapeutic jets and safety features in Owatonna, MN",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative">
                      <DynamicGalleryImage
                        src={item.before.src}
                        alt={item.before.alt}
                        width={item.before.width}
                        height={item.before.height}
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={item.before.blurDataURL}
                        quality={80}
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <DynamicGalleryImage
                        src={item.after.src}
                        alt={item.after.alt}
                        width={item.after.width}
                        height={item.after.height}
                        className="w-full h-48 object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL={item.after.blurDataURL}
                        quality={80}
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        AFTER
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "recent-projects" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <DynamicGalleryImage
                      src={project.src}
                      alt={project.alt}
                      width={project.width}
                      height={project.height}
                      className="w-full h-48 object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={project.blurDataURL}
                      quality={80}
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">
                        {project.alt.split(" in ")[0]}
                      </h3>
                      <p className="text-gray-600 text-sm">{project.alt}</p>
                    </div>
                  </div>
                ))}
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Owatonna Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from homeowners in Owatonna, MN, who transformed their bathrooms with Stone Work
                Remodeling.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`bg-white rounded-lg shadow-md p-8 transition-all duration-300 ${
                      activeTestimonial === index ? "border-2 border-blue-600 scale-105" : "opacity-80"
                    }`}
                    role="article"
                    aria-label={`Testimonial from ${testimonial.name}`}
                  >
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        sizes="48px"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                        quality={75}
                        loading="lazy"
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

              <div className="flex justify-center mt-8 space-x-2" role="navigation" aria-label="Testimonial navigation">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      activeTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
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
        <section className="py-20 bg-white" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stone Bathroom Remodeling FAQs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Answers to common questions about stone bathroom remodeling in Owatonna, MN.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <button
                    className="w-full text-left flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
                    onClick={() => setActiveTab(activeTab === `faq-${index}` ? "" : `faq-${index}`)}
                    aria-expanded={activeTab === `faq-${index}`}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-600 transform transition-transform ${
                        activeTab === `faq-${index}` ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {activeTab === `faq-${index}` && (
                    <div id={`faq-answer-${index}`} className="mt-2 px-6 py-4 bg-white rounded-lg shadow-sm">
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
        <section
          className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Stone Bathroom in Owatonna, MN?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule your free consultation today and start your journey to a luxurious stone
              bathroom with Stone Work Remodeling.
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
                href="tel:+12483468926"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                (248) 346-8926
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
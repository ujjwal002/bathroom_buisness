import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12" role="contentinfo" aria-label="Footer">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stone Works Remodeling",
            "url": "https://stoneworkremodeling.com",
            "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+12483468926",
                "contactType": "Customer Service",
                "email": "info@stoneworkremodeling.com",
                "areaServed": "US",
                "availableLanguage": "English",
              },
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4671 Sugar Camp Road",
              "addressLocality": "Metro Detroit",
              "addressRegion": "MN",
              "postalCode": "55060",
              "addressCountry": "US",
            },
            "sameAs": [
              "https://www.facebook.com/stoneworkremodeling",
              "https://www.instagram.com/stoneworkremodeling",
              "https://www.linkedin.com/company/stoneworkremodeling",
            ],
          }),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 overflow-hidden shadow-md">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/stone.webp" // S3-hosted WebP logo
                  alt="Stone Works Remodeling logo for premium stone bathroom remodeling in Metro Detroit, MI"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                  sizes="64px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                  quality={80}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-extralight text-gray-900 tracking-tight">
                  Stone Works <span className="text-blue-600">Remodeling</span>
                </h1>
                <span className="text-sm text-gray-500">Your Trusted Remodeling Partner</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4 mt-4">
              Stone Works Remodeling is your trusted expert in premium  bathroom remodeling and
              custom tile in Metro Detroit, MI. Unmatched craftsmanship and Exceptional service.
            </p>
            <div className="flex space-x-4" aria-label="Social media links">
              <a
                href="https://www.facebook.com/stoneworkremodeling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stone Works Remodeling on Facebook"
                className="text-gray-500 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/stoneworkremodeling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stone Works Remodeling on Instagram"
                className="text-gray-500 hover:text-pink-500"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.735 0 8.332.013 7.052.07 5.766.128 4.332.393 3.001 1.724 1.67 3.055 1.405 4.489 1.348 5.775c-.057 1.28-.07 1.683-.07 4.948s.013 3.668.07 4.948c.057 1.286.322 2.72 1.653 4.051 1.331 1.331 2.765 1.596 4.051 1.653 1.28.057 1.683.07 4.948.07s3.668-.013 4.948-.07c1.286-.057 2.72-.322 4.051-1.653 1.331-1.331 1.596-2.765 1.653-4.051.057-1.28.07-1.683.07-4.948s-.013-3.668-.07-4.948c-.057-1.286-.322-2.72-1.653-4.051C19.668.393 18.234.128 16.948.07 15.668.013 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/stoneworkremodeling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Stone Works Remodeling on LinkedIn"
                className="text-gray-500 hover:text-blue-700"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.867 0-2.153 1.459-2.153 2.966v5.701h-3v-11h2.879v1.508h.04c.401-.757 1.379-1.558 2.837-1.558 3.036 0 3.604 2 3.604 4.604v6.446z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-blue-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Service links">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/bathroom-remodeling"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/shower-conversion"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Shower Conversion
                </Link>
              </li>
              <li>
                <Link href="/services/walk-in-tubs" className="text-gray-600 hover:text-blue-600">
                  Walk-in Tubs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-stonework"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Custom Tile
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic text-gray-600">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-500" aria-hidden="true" />
                <a href="tel:+12483468926" className="hover:text-blue-600">
                  (248) 346-8926
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-gray-500" aria-hidden="true" />
                <a
                  href="mailto:stoneworksremodeling8@gmail.com"
                  className="hover:text-blue-600"
                >
                  stoneworksremodeling8@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-1" aria-hidden="true" />
                <span>
                  19042 Myron st
                  <br />
                  Livonia, Michigan 48152
                </span>
              </li>
            </ul>
          </address>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Stone Works Remodeling. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
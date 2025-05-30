"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X, Mail, Clock, ShowerHead, Droplets, Bath, Accessibility } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and services dropdown when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "/services") return pathname.startsWith("/services");
    if (path === "/blog") return pathname.startsWith("/blog");
    return pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm shadow-lg" : "bg-white/95"
      }`}
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stone Works Remodeling",
              "url": "https://stoneworkremodeling.com",
              "logo": "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/stone.webp",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+12483468926",
                  "contactType": "Customer Service",
                  "email": "stoneworksremodeling8@gmail.com",
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
            },
            {
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": [
                "Home",
                "Services",
                "Gallery",
                "About Us",
                "Blog",
                "Contact",
                "Stone Bathroom Remodeling",
                "Shower Conversion",
                "Walk-in Tubs",
                "Custom Stonework",
              ],
              "url": [
                "https://stoneworkremodeling.com/",
                "https://stoneworkremodeling.com/services",
                "https://stoneworkremodeling.com/gallery",
                "https://stoneworkremodeling.com/about",
                "https://stoneworkremodeling.com/blog",
                "https://stoneworkremodeling.com/contact",
                "https://stoneworkremodeling.com/services/bathroom-remodeling",
                "https://stoneworkremodeling.com/services/shower-conversion",
                "https://stoneworkremodeling.com/services/walk-in-tubs",
                "https://stoneworkremodeling.com/services/custom-works",
              ],
            },
          ]),
        }}
      />

      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 sm:px-6">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-2 group">
              <Phone className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <a
                href="tel:+12483468926"
                className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
                aria-label="Call Stone Works Remodeling for a free bathroom remodeling quote"
              >
                (248) 346-8926
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <a
                href="mailto:stoneworksremodeling8@gmail.com"
                className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
              >
                stoneworksremodeling8@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-xs font-medium text-gray-300">
            <Clock className="h-3 w-3 text-blue-400" />
            <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Stone Works Remodeling Home">
            <div className="flex items-center gap-3 sm:gap-4 group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/stone.webp"
                  alt="Stone Works Remodeling logo for premium stone bathroom remodeling in Metro Detroit, MI"
                  className="w-full h-full object-cover"
                  width={64}
                  height={64}
                  sizes="(max-width: 640px) 48px, 64px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg=="
                  quality={80}
                  loading="eager"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-extralight text-gray-900 tracking-tight">
                  Stone Works <span className="text-blue-600">Remodeling</span>
                </h1>
                <span className="text-xs sm:text-sm text-gray-500">Your Trusted Remodeling Partner</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isActive("/")
                  ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50"
                  : "hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 ${
                  isActive("/services")
                    ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 group-hover:bg-blue-50"
                    : "group-hover:text-blue-600 after:bg-blue-600 group-hover:bg-gray-50"
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-dropdown"
              >
                Services <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div
                id="services-dropdown"
                className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-2xl py-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100 transform origin-top scale-95 group-hover:scale-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4">
                  <h3 className="font-semibold text-base sm:text-lg">Our Premium Services</h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1"> bathroom solutions in Metro Detroit, MI</p>
                </div>
                <div className="grid grid-cols-1 gap-0">
                  <Link
                    href="/services/bathroom-remodeling"
                    className="group/item flex items-center px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-blue-100 group-hover/item:bg-blue-200 transition-colors mr-3">
                      <ShowerHead className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base text-gray-900 group-hover/item:text-blue-600 transition-colors">
                         Bathroom Remodeling
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Complete  bathroom renovations</p>
                    </div>
                  </Link>
                  <Link
                    href="/services/shower-conversions"
                    className="group/item flex items-center px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-blue-100 group-hover/item:bg-blue-200 transition-colors mr-3">
                      <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base text-gray-900 group-hover/item:text-blue-600 transition-colors">
                        Shower Conversion
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Convert tubs to modern walk-in showers</p>
                    </div>
                  </Link>
                  <Link
                    href="/services/walk-in-tubs"
                    className="group/item flex items-center px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-blue-100 group-hover/item:bg-blue-200 transition-colors mr-3">
                      <Accessibility className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base text-gray-900 group-hover/item:text-blue-600 transition-colors">
                        Walk-in Tubs
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Safe, accessible bathing solutions</p>
                    </div>
                  </Link>
                  <Link
                    href="/services/custom-works"
                    className="group/item flex items-center px-4 py-3 hover:bg-blue-50 transition-colors"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-blue-100 group-hover/item:bg-blue-200 transition-colors mr-3">
                      <Bath className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-base text-gray-900 group-hover/item:text-blue-600 transition-colors">
                        Custom
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">Unique designs for your bathroom</p>
                    </div>
                  </Link>
                </div>
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    View all services
                    <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isActive("/gallery")
                  ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50"
                  : "hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isActive("/about")
                  ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50"
                  : "hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isActive("/blog")
                  ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50"
                  : "hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                isActive("/contact")
                  ? "text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50"
                  : "hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-px transform ml-6"
          >
            FREE QUOTE
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white py-4 px-4 sm:px-6 shadow-lg transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <Link
          href="/"
          className={`block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            isActive("/") ? "text-blue-600" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>

        {/* Services Accordion */}
        <div>
          <button
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={`flex items-center justify-between w-full py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
              isActive("/services") ? "text-blue-600" : ""
            }`}
            aria-expanded={servicesDropdownOpen}
            aria-controls="mobile-services-dropdown"
          >
            Services
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            id="mobile-services-dropdown"
            className={`py-2 bg-gray-50 rounded-md mb-2 overflow-hidden transition-all duration-300 ${
              servicesDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <Link
              href="/services/bathroom-remodeling"
              className={`flex items-center px-4 py-2 text-sm hover:bg-blue-50 transition-all ${
                pathname === "/services/bathroom-remodeling" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-1 rounded-full bg-blue-100 mr-3">
                <ShowerHead className="h-4 w-4 text-blue-600" />
              </div>
              <span>Stone Bathroom Remodeling</span>
            </Link>
            <Link
              href="/services/shower-conversions"
              className={`flex items-center px-4 py-2 text-sm hover:bg-blue-50 transition-all ${
                pathname === "/services/shower-conversions" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-1 rounded-full bg-blue-100 mr-3">
                <Droplets className="h-4 w-4 text-blue-600" />
              </div>
              <span>Shower Conversion</span>
            </Link>
            <Link
              href="/services/walk-in-tubs"
              className={`flex items-center px-4 py-2 text-sm hover:bg-blue-50 transition-all ${
                pathname === "/services/walk-in-tubs" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-1 rounded-full bg-blue-100 mr-3">
                <Accessibility className="h-4 w-4 text-blue-600" />
              </div>
              <span>Walk-in Tubs</span>
            </Link>
            <Link
              href="/services/custom-works"
              className={`flex items-center px-4 py-2 text-sm hover:bg-blue-50 transition-all ${
                pathname === "/services/custom-works" ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-1 rounded-full bg-blue-100 mr-3">
                <Bath className="h-4 w-4 text-blue-600" />
              </div>
              <span>Custom </span>
            </Link>
            <div className="px-4 py-2 border-t border-gray-200">
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                View all services
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <Link
          href="/gallery"
          className={`block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            isActive("/gallery") ? "text-blue-600" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          href="/about"
          className={`block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            isActive("/about") ? "text-blue-600" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/blog"
          className={`block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            isActive("/blog") ? "text-blue-600" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`block py-2 text-sm font-medium text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            isActive("/contact") ? "text-blue-600" : ""
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>

        {/* Mobile CTA */}
        <div className="mt-4 mb-2">
          <Link
            href="/contact"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET YOUR FREE QUOTE TODAY
          </Link>
        </div>

        {/* Mobile Contact Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 py-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <a
              href="tel:+12483468926"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              (248) 346-8926
            </a>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <Mail className="h-4 w-4 text-blue-600" />
            <a
              href="mailto:stoneworksremodeling8@gmail.com"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              stoneworksremodeling8@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <Clock className="h-4 w-4 text-blue-600" />
            <div className="text-sm font-medium text-gray-700">
              <div>Mon-Fri: 8AM-6PM</div>
              <div>Sat: 9AM-2PM</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown, Menu, X, Mail, Clock } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate active page for demo purposes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/98 backdrop-blur-sm shadow-lg py-1' : 'bg-white/95 py-2'
    }`}>
      {/* Top Bar - Premium contact info */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 group">
              <Phone className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <a 
                href="tel:+1234567890" 
                className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
                aria-label="Call us for a free quote"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-2 group">
              <Mail className="h-4 w-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <a 
                href="mailto:info@bathpro.com" 
                className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors"
              >
                info@bathpro.com
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 text-xs font-medium text-gray-300">
            <Clock className="h-3 w-3 text-blue-400" />
            <span>Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group" 
            aria-label="Home"
            onClick={() => setActiveLink('/')}
          >
            <span className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform">
              <span className="text-blue-600 group-hover:text-blue-700 transition-colors">Bath</span>Pro
              <span className="text-xs align-top text-blue-600 group-hover:text-blue-700 transition-colors ml-1">®</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeLink === '/' 
                  ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50' 
                  : 'hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveLink('/')}
            >
              Home
            </Link>
            
            {/* Services dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 group-hover:after:w-full after:transition-all after:duration-300 ${
                  activeLink.includes('/services') 
                    ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 group-hover:bg-blue-50' 
                    : 'group-hover:text-blue-600 after:bg-blue-600 group-hover:bg-gray-50'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                Services <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 transform origin-top scale-95 group-hover:scale-100">
                <Link 
                  href="/services/bathroom-remodeling" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setActiveLink('/services/bathroom-remodeling')}
                >
                  Bathroom Remodeling
                </Link>
                <Link 
                  href="/services/tub-replacement" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setActiveLink('/services/tub-replacement')}
                >
                  Tub Replacement
                </Link>
                <Link 
                  href="/services/shower-conversion" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setActiveLink('/services/shower-conversion')}
                >
                  Shower Conversion
                </Link>
                <Link 
                  href="/services/walk-in-tubs" 
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors"
                  onClick={() => setActiveLink('/services/walk-in-tubs')}
                >
                  Walk-in Tubs
                </Link>
              </div>
            </div>
            
            <Link 
              href="/gallery" 
              className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeLink === '/gallery' 
                  ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50' 
                  : 'hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveLink('/gallery')}
            >
              Gallery
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeLink === '/about' 
                  ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50' 
                  : 'hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveLink('/about')}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeLink === '/blog' 
                  ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50' 
                  : 'hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveLink('/blog')}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-2 rounded-md text-gray-800 font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeLink === '/contact' 
                  ? 'text-blue-600 after:bg-blue-600 after:w-full hover:text-blue-700 hover:bg-blue-50' 
                  : 'hover:text-blue-600 after:bg-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setActiveLink('/contact')}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-px transform ml-8"
          >
            FREE QUOTE
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none hover:text-blue-600 transition-colors p-1 hover:bg-gray-100 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white py-3 px-4 shadow-lg transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        } ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <Link 
          href="/" 
          className={`block py-3 text-gray-800 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            activeLink === '/' ? 'text-blue-600 font-medium' : ''
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveLink('/');
          }}
        >
          Home
        </Link>
        
        {/* Services accordion in mobile menu */}
        <div>
          <button 
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={`flex items-center justify-between w-full py-3 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
              activeLink.includes('/services') ? 'text-blue-600 font-medium' : 'text-gray-800'
            }`}
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`pl-4 py-1 bg-gray-50 rounded-md mb-2 overflow-hidden transition-all duration-300 ${
            servicesDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <Link 
              href="/services/bathroom-remodeling" 
              className={`block py-3 hover:pl-2 transition-all ${
                activeLink === '/services/bathroom-remodeling' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveLink('/services/bathroom-remodeling');
              }}
            >
              Bathroom Remodeling
            </Link>
            <Link 
              href="/services/tub-replacement" 
              className={`block py-3 hover:pl-2 transition-all ${
                activeLink === '/services/tub-replacement' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveLink('/services/tub-replacement');
              }}
            >
              Tub Replacement
            </Link>
            <Link 
              href="/services/shower-conversion" 
              className={`block py-3 hover:pl-2 transition-all ${
                activeLink === '/services/shower-conversion' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveLink('/services/shower-conversion');
              }}
            >
              Shower Conversion
            </Link>
            <Link 
              href="/services/walk-in-tubs" 
              className={`block py-3 hover:pl-2 transition-all ${
                activeLink === '/services/walk-in-tubs' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveLink('/services/walk-in-tubs');
              }}
            >
              Walk-in Tubs
            </Link>
          </div>
        </div>
        
        <Link 
          href="/gallery" 
          className={`block py-3 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            activeLink === '/gallery' ? 'text-blue-600 font-medium' : 'text-gray-800'
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveLink('/gallery');
          }}
        >
          Gallery
        </Link>
        <Link 
          href="/about" 
          className={`block py-3 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            activeLink === '/about' ? 'text-blue-600 font-medium' : 'text-gray-800'
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveLink('/about');
          }}
        >
          About Us
        </Link>
        <Link 
          href="/blog" 
          className={`block py-3 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            activeLink === '/blog' ? 'text-blue-600 font-medium' : 'text-gray-800'
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveLink('/blog');
          }}
        >
          Blog
        </Link>
        <Link 
          href="/contact" 
          className={`block py-3 hover:text-blue-600 border-b border-gray-100 transition-all hover:pl-2 ${
            activeLink === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-800'
          }`}
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveLink('/contact');
          }}
        >
          Contact
        </Link>
        
        {/* Mobile CTA */}
        <div className="mt-6 mb-2">
          <Link 
            href="/contact" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-center font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET YOUR FREE QUOTE TODAY
          </Link>
        </div>
        
        {/* Mobile contact info */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 py-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <a href="tel:+1234567890" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              (123) 456-7890
            </a>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <Mail className="h-4 w-4 text-blue-600" />
            <a href="mailto:info@bathpro.com" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              info@bathpro.com
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
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-12" role="contentinfo">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                            <div className="w-16 h-16 overflow-hidden shadow-md">
                                <Image
                                    src="/stone.jpg"  // local image path
                                    alt="Stone Work Remodeling Logo"
                                    className="w-full h-full object-cover"
                                    width={500}  // Set the width for the image
                                    height={300}  // Set the height for the image
                                />
                            </div>
                            <div className="flex flex-col">
                                <h1 className=" font-extralight text-gray-900 tracking-tight">
                                    Stone Work <span className="text-blue-600">Remodeling</span>
                                </h1>
                                <span className="text-sm text-gray-500">Your Trusted Remodeling Partner</span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 mt-4">
                            StoneWork Remodeling is your trusted expert in custom stonework
                            and premium home remodeling. Unmatched craftsmanship. Exceptional
                            service.
                        </p>
                        <div className="flex space-x-4" aria-label="Social media links">
                            <a
                                href="https://www.facebook.com/stoneworkremodeling"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-gray-500 hover:text-blue-600"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523..."></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/stoneworkremodeling"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gray-500 hover:text-pink-500"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204..."></path>
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/stoneworkremodeling"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-500 hover:text-blue-700"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761..."></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Quick links">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-600 hover:text-blue-600">Our Services</Link></li>
                            <li><Link href="/gallery" className="text-gray-600 hover:text-blue-600">Gallery</Link></li>
                            <li><Link href="/testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
                        </ul>
                    </nav>

                    {/* Services */}
                    <nav aria-label="Service links">
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services/kitchen-remodeling" className="text-gray-600 hover:text-blue-600">Kitchen Remodeling</Link></li>
                            <li><Link href="/services/bathroom-remodeling" className="text-gray-600 hover:text-blue-600">Bathroom Renovation</Link></li>
                            <li><Link href="/services/custom-stonework" className="text-gray-600 hover:text-blue-600">Custom Stonework</Link></li>
                            <li><Link href="/services/outdoor-living" className="text-gray-600 hover:text-blue-600">Outdoor Living Spaces</Link></li>
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <address className="not-italic text-gray-600">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-gray-500" />
                                <a href="tel:+1234567890" className="hover:text-blue-600">(248) 346-8926</a>
                            </li>
                            <li className="flex items-center">
                                <MessageCircle className="h-5 w-5 mr-2 text-gray-500" />
                                <a href="mailto:stoneworksremodeling8@gmail.com" className="hover:text-blue-600">stoneworksremodeling8@gmail.com</a>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 mr-2 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9..." />
                                </svg>
                                <span>
                                    123 Stone Street<br />
                                    Mason City, ST 56789
                                </span>
                            </li>
                        </ul>
                    </address>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} StoneWork Remodeling. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

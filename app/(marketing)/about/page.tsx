"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

// Interfaces for TypeScript
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <title>stone work remodeling | About Us</title>
      <meta
        name="description"
        content="Learn about stone work remodeling, your trusted bathroom remodeling experts. Discover our story, meet our team, and see why we’re the top choice for bathroom transformations."
      />
      <meta
        name="keywords"
        content="stone work remodeling about us, bathroom remodeling company, bathroom renovation experts, trusted remodelers"
      />
      <meta property="og:title" content="stone work remodeling | About Us" />
      <meta
        property="og:description"
        content="Meet the stone work remodeling team and learn about our commitment to transforming bathrooms with quality and care."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stone work remodeling.com/about" />
      <meta property="og:image" content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/krY1iLp90R9l3kcrrUhu-.png" />
      <link rel="canonical" href="https://stone work remodeling.com/about" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "stone work remodeling",
            url: "https://stone work remodeling.com",
            logo: "https://stone work remodeling.com/images/logo.png",
            description:
              "stone work remodeling is a leading bathroom remodeling company dedicated to transforming spaces with quality craftsmanship and exceptional customer service.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Remodel Lane",
              addressLocality: "Springfield",
              addressRegion: "IL",
              postalCode: "62701",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 (248) 346-8926",
              contactType: "Customer Service",
              email: "stoneworksremodeling8@gmail.com",
            },
            sameAs: [
              "https://www.facebook.com/stone work remodeling",
              "https://www.instagram.com/stone work remodeling",
              "https://www.linkedin.com/company/stone work remodeling",
            ],
          }),
        }}
      />
    </>
  );
}

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      bio: "With over 20 years in the remodeling industry, John leads stone work remodeling with a passion for quality and innovation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Lead Designer",
      bio: "Jane’s eye for detail and creative designs transform bathrooms into stunning, functional spaces.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Project Manager",
      bio: "Mike ensures every project is completed on time and to the highest standards of craftsmanship.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Customer Experience Manager",
      bio: "Emily is dedicated to making every client’s journey with stone work remodeling seamless and satisfying.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
  ];

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "stone work remodeling transformed our outdated bathroom into a modern masterpiece. The team was professional and attentive to every detail!",
      author: "Sarah M.",
      location: "Springfield, IL",
    },
    {
      id: 2,
      quote:
        "From design to completion, stone work remodeling exceeded our expectations. Our new walk-in shower is both beautiful and accessible.",
      author: "James T.",
      location: "Chicago, IL",
    },
    {
      id: 3,
      quote:
        "The quality of work and customer service from stone work remodeling is unmatched. We love our new spa-inspired bathroom!",
      author: "Linda K.",
      location: "Peoria, IL",
    },
  ];

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/krY1iLp90R9l3kcrrUhu-.png");
          background-size: cover;
          background-position: center;
        }
        .team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 640px) {
          .cta-button {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
          }
          .team-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>

      <SEOMetadata />

      {/* Hero Section */}
      <section className="relative hero-bg text-white py-20 sm:py-28">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About stone work remodeling
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
            Transforming bathrooms with craftsmanship, innovation, and care since 2005.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl cta-button"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      {/* <div
        className={`sticky top-0 z-40 bg-white shadow-md transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-navy-900">
              stone work remodeling
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/gallery"
                className="text-navy-600 hover:text-navy-800 font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="text-navy-600 hover:text-navy-800 font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-navy-600 hover:text-navy-800 font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div> */}

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="fade-in visible">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Founded in 2005, stone work remodeling began with a simple mission: to transform bathrooms into beautiful, functional spaces that enhance lives. Over the years, we’ve grown into a trusted name in bathroom remodeling, known for our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                From luxury master suites to accessible walk-in tubs, every project reflects our dedication to craftsmanship and attention to detail. At stone work remodeling, we believe a bathroom is more than a room—it’s a sanctuary.
              </p>
            </div>
            <div className="relative h-64 sm:h-96 fade-in visible">
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/w6HJzxSeslcbuk0sJgPQc.png"
                alt="stone work remodeling bathroom project"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center">
            Why Choose stone work remodeling
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Expertise",
                description: "With over 15 years of experience, our team delivers exceptional results every time.",
              },
              {
                title: "Customer-First Approach",
                description: "We prioritize your vision, ensuring a seamless and satisfying remodeling experience.",
              },
              {
                title: "Premium Materials",
                description: "We use only the highest-quality materials for durability and beauty.",
              },
              {
                title: "Comprehensive Warranties",
                description: "Our work is backed by industry-leading warranties for your peace of mind.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center fade-in visible"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-card bg-white rounded-lg shadow-lg overflow-hidden fade-in visible"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-navy-900">{member.name}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-navy-50 relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="Testimonial background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6 fade-in visible"
              >
                <Quote className="h-8 w-8 text-gold-500 mb-4" />
                <p className="text-gray-600 text-base mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-navy-900 font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-50 to-navy-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Let our expert team bring your vision to life with a personalized remodeling experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl cta-button"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
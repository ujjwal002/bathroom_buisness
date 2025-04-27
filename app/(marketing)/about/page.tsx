"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";

// Interfaces
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
      <Head>
        <title>About Stone Works Remodeling | Bathroom Remodeling Experts in Metro Detroit, MI</title>
        <meta
          name="description"
          content="Discover Stone Works Remodeling, your trusted experts for stone bathroom remodeling in Metro Detroit, MI. Meet our team, explore our story, and see why we’re the top choice."
        />
        <meta
          name="keywords"
          content="Stone Works Remodeling about us, stone bathroom remodeling Metro Detroit, bathroom renovation experts, Metro Detroit MN remodelers"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Stone Works Remodeling | Bathroom Remodeling in Metro Detroit, MI"
        />
        <meta
          property="og:description"
          content="Learn about Stone Works Remodeling’s commitment to quality bathroom transformations in Metro Detroit, MI. Meet our expert team and see client testimonials."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stoneworkremodeling.com/about" />
        <meta
          property="og:image"
          content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp"
        />
        <link rel="canonical" href="https://stoneworkremodeling.com/about" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stone Works Remodeling",
              url: "https://stoneworkremodeling.com",
              logo: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp",
              description:
                "Stone Works Remodeling is a premier bathroom remodeling company in Metro Detroit, MI, specializing in stone transformations with exceptional craftsmanship.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4671 Sugar Camp Road",
                addressLocality: "Metro Detroit",
                addressRegion: "MN",
                postalCode: "55060",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+12483468926",
                contactType: "Customer Service",
                email: "info@stoneworkremodeling.com",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
              sameAs: [
                "https://www.facebook.com/stoneworkremodeling",
                "https://www.instagram.com/stoneworkremodeling",
                "https://www.linkedin.com/company/stoneworkremodeling",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "About Stone Works Remodeling",
              url: "https://stoneworkremodeling.com/about",
              description:
                "Learn about Stone Works Remodeling’s mission, team, and expertise in stone bathroom remodeling in Metro Detroit, MI.",
            },
          ]),
        }}
      />
    </>
  );
}

export default function AboutPage() {
  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Founder & CEO",
      bio: "With over 20 years in the remodeling industry, John leads Stone Works Remodeling with a passion for quality and innovation.",
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
      bio: "Emily is dedicated to making every client’s journey with Stone Works Remodeling seamless and satisfying.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
  ];

  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Stone Works Remodeling transformed our outdated bathroom into a modern masterpiece. The team was professional and attentive to every detail!",
      author: "Sarah M.",
      location: "Metro Detroit, MI",
    },
    {
      id: 2,
      quote:
        "From design to completion, Stone Works Remodeling exceeded our expectations. Our new walk-in shower is both beautiful and accessible.",
      author: "James T.",
      location: "Metro Detroit, MI",
    },
    {
      id: 3,
      quote:
        "The quality of work and customer service from Stone Works Remodeling is unmatched. We love our new spa-inspired bathroom!",
      author: "Linda K.",
      location: "Metro Detroit, MI",
    },
  ];

  // Handle fade-in animations
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/krY1iLp90R9l3kcrrUhu-.png");
          background-size: cover;
          background-position: center;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 16px;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

        .cta-button {
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
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
      <section className="relative hero-bg text-white py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Stone Works Remodeling
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting luxurious stone bathroom transformations in Metro Detroit, MI since 2005.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center cta-button text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="fade-in"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-blue-100 text-base sm:text-lg mb-4">
                Since 2005, Stone Works Remodeling has been transforming bathrooms in Metro Detroit, MI, into stunning, functional sanctuaries. Our journey began with a passion for quality craftsmanship and a commitment to exceeding client expectations.
              </p>
              <p className="text-blue-100 text-base sm:text-lg">
                Specializing in stone bathroom remodeling, we blend innovation with timeless design to create spaces that inspire. From luxurious master suites to accessible walk-in showers, every project reflects our dedication to excellence.
              </p>
            </motion.div>
            <motion.div
              className="relative h-64 sm:h-96 fade-in"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/w6HJzxSeslcbuk0sJgPQc.png"
                alt="Stone Works Remodeling luxury bathroom project in Metro Detroit, MI"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Stone Works Remodeling
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Unmatched Expertise",
                description: "Over 20 years of experience delivering exceptional stone bathroom remodels.",
              },
              {
                title: "Client-Centric Approach",
                description: "Your vision drives our process, ensuring a personalized experience.",
              },
              {
                title: "Premium Stone Materials",
                description: "We use top-quality stone for durability and timeless beauty.",
              },
              {
                title: "Comprehensive Warranties",
                description: "Industry-leading warranties for your peace of mind.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="team-card card overflow-hidden fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Stone Works Remodeling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 opacity-5">
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
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="card p-6 fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 text-base mb-4 italic">“{testimonial.quote}”</p>
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Bathroom?
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let our expert team in Metro Detroit, MI, bring your vision to life with a personalized stone remodeling experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center cta-button text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
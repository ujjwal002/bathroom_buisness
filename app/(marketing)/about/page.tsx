"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {  Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

// Interfaces


interface CustomerImage {
  src: string;
  alt: string;
  role: string;
  blurDataURL: string;
}

interface Review {
  id: number;
  name: string;
  rating: string;
  quote: string;
  shortQuote?: string;
  location: string;
  image: CustomerImage;
}

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <Head>
        <title>About Stone Works Remodeling | Premier Bathroom Remodeling in Metro Detroit, MI</title>
        <meta
          name="description"
          content="Learn about Stone Works Remodeling, Metro Detroit's leading experts in bathroom remodeling. Discover our story, meet our team, and read client testimonials."
        />
        <meta
          name="keywords"
          content="Stone Works Remodeling, bathroom remodeling Metro Detroit, bathroom renovation, Metro Detroit MI remodelers, luxury bathroom design"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Stone Works Remodeling | Luxury Bathroom Remodeling in Metro Detroit, MI"
        />
        <meta
          property="og:description"
          content="Explore Stone Works Remodeling’s dedication to crafting luxurious bathrooms in Metro Detroit, MI. Meet our expert team and see why clients trust us."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stoneworkremodeling.com/about" />
        <meta
          property="og:image"
          content="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/logo.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Stone Works Remodeling | Luxury Bathroom Remodeling in Metro Detroit, MI"
        />
        <meta
          name="twitter:description"
          content="Discover Stone Works Remodeling’s mission to transform bathrooms with premium craftsmanship in Metro Detroit, MI."
        />
        <meta
          name="twitter:image"
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
                "Stone Works Remodeling specializes in premium bathroom remodeling in Metro Detroit, MI, delivering exceptional craftsmanship",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4671 Sugar Camp Road",
                addressLocality: "Metro Detroit",
                addressRegion: "MI",
                postalCode: "55060",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-248-346-8926",
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
                "Learn about Stone Works Remodeling’s mission, expert team, and commitment to luxury bathroom remodeling in Metro Detroit, MI.",
              isPartOf: {
                "@type": "WebSite",
                name: "Stone Works Remodeling",
                url: "https://stoneworkremodeling.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://stoneworkremodeling.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://stoneworkremodeling.com/about",
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
}

export default function AboutPage() {
  // Team data


  // Customer images
  const customerImages: CustomerImage[] = [
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user1.webp",
      alt: "Satisfied Stone Works Remodeling customer in Metro Detroit, MI",
      role: "Satisfied homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user2.webp",
      alt: "Recent Stone Works Remodeling client for bathroom remodel",
      role: "Recent client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user3.webp",
      alt: "Stone Works Remodeling customer for shower conversion",
      role: "Shower conversion client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user4.webp",
      alt: "Stone Works Remodeling homeowner in Michigan",
      role: "Homeowner",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user5.webp",
      alt: "Stone Works Remodeling walk-in tub installation client",
      role: "Walk-in tub client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user6.webp",
      alt: "Stone Works Remodeling basement bathroom client",
      role: "Basement bathroom client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user7.webp",
      alt: "Stone Works Remodeling plumbing client",
      role: "Plumbing client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user8.webp",
      alt: "Stone Works Remodeling satisfied client",
      role: "Satisfied client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user9.webp",
      alt: "Stone Works Remodeling professional service client",
      role: "Professional service client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
    {
      src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/profile/user10.webp",
      alt: "Stone Works Remodeling happy client",
      role: "Happy client",
      blurDataURL:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
    },
  ];

  // Reviews data with schema.org structured data
  const reviews: Review[] = [
    {
      id: 1,
      name: "Cari Zupko",
      rating: "⭐⭐⭐⭐⭐",
      quote: "The guys are great and hard workers. They were always on time and worked diligently. I love my new bathrooms. Would definitely recommend them!",
      location: "Metro Detroit, MI",
      image: customerImages[0],
    },
    {
      id: 2,
      name: "Kelly Stanford",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "I just finished a Major master Bathroom remodel that Stone Works Remodeling completed for me in a timely manner...",
      quote:
        "I just finished a Major master Bathroom remodel that Stone Works Remodeling completed for me in a timely manner. They went over and above what I expected during our project, even taking on an additional project and doing our Family Rooms flooring project and installing LVP flooring. This was all done still within our time frame and we kept everything on schedule. Valjon and Cristain along with their connections with industry partners were able to streamline many of the projects timeframe and help keep them on budget. Plus all their resources were very knowledgeable and excellent in their area of expertise. I would not hesitate to recommend them to anyone for their next project and I am sure that soon it is going to be very difficult to get them without a long wait!!",
      location: "Metro Detroit, MI",
      image: customerImages[1],
    },
    {
      id: 3,
      name: "Amit Somani",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Val recently completed our master bathroom remodel, and we couldn’t be more pleased with the results...",
      quote:
        "Val recently completed our master bathroom remodel, and we couldn’t be more pleased with the results. His attention to detail and craftsmanship are truly exceptional. Working with marble walls and flooring can be challenging, but Val handled it with ease, showcasing his impressive skills. He also managed the plumbing and electrical work flawlessly, making the entire process smooth and stress-free for us. What stood out the most was Val’s patience and commitment to ensuring everything was done to perfection. He listened to our ideas, provided valuable suggestions, and executed the project with great care. The finished bathroom exceeds our expectations in every way. If you’re looking for someone who can handle every aspect of a remodel with expertise and professionalism, Val is the person to call. We highly recommend him for any remodeling projects!",
      location: "Metro Detroit, MI",
      image: customerImages[3],
    },
    {
      id: 4,
      name: "Frank Carlin",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Valjon was very professional and mindful when working at my house. He’s attention to detail and work ethic was unmatched...",
      quote:
        "Valjon was very professional and mindful when working at my house. He’s attention to detail and work ethic was unmatched compared to other companies I’ve worked with before. If you are going to do any remodeling in your home, I would recommend using stone works remodeling! They are very reasonable with pricing and were supportive in any of my request!",
      location: "Metro Detroit, MI",
      image: customerImages[4],
    },
    {
      id: 5,
      name: "Anxhelo Xhakollari",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Very professional, clean, respectful and got the job done in a timely manner...",
      quote:
        "Very professional, clean, respectful and got the job done in a timely manner. We got our basement bathroom refinished by them and we couldnt be happier with the results!",
      location: "Metro Detroit, MI",
      image: customerImages[5],
    },
    {
      id: 6,
      name: "Hannah Roll",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote:
        "Val and Cristian replaced my plumbing for my bathtub and I was very pleased by their professionalism and craftsmanship! I would recommend them to anyone I know!.",
      quote:
        "Val and Cristian replaced my plumbing for my bathtub and I was very pleased by their professionalism and craftsmanship! I would recommend them to anyone I know!.",
      location: "Metro Detroit, MI",
      image: customerImages[6],
    },
    {
      id: 7,
      name: "Dakota Stanichuk",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Phenomenal service, I would highly recommend reaching out to Stone Works Remodeling for all of your remodeling needs.",
      quote:
        "Phenomenal service, I would highly recommend reaching out to Stone Works Remodeling for all of your remodeling needs.",
      location: "Metro Detroit, MI",
      image: customerImages[7],
    },
    {
      id: 8,
      name: "FT",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Professional, timely, and clean.",
      quote: "Professional, timely, and clean.",
      location: "Metro Detroit, MI",
      image: customerImages[8],
    },
    {
      id: 9,
      name: "Alicia",
      rating: "⭐⭐⭐⭐⭐",
      shortQuote: "Great service and results.",
      quote: "Great service and results.",
      location: "Metro Detroit, MI",
      image: customerImages[9],
    },
  ];

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Review component with enhanced UI
  const ReviewCard = ({ review }: { review: Review }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <motion.div
        className="review-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        role="article"
        aria-labelledby={`review-${review.id}`}
      >
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
            <Image
              src={review.image.src}
              alt={review.image.alt}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={review.image.blurDataURL}
            />
          </div>
          <div className="ml-4">
            <h4 id={`review-${review.id}`} className="text-lg font-semibold text-gray-900">
              {review.name}
            </h4>
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg">{review.rating}</span>
              <span className="ml-2 text-sm text-gray-500">{review.location}</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Quote className="absolute -top-4 left-0 h-6 w-6 text-blue-600 opacity-20" />
          <AnimatePresence>
            <motion.p
              key={isExpanded ? "full" : "short"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 text-sm italic leading-relaxed"
            >
              {review.shortQuote && !isExpanded ? review.shortQuote : review.quote}
            </motion.p>
          </AnimatePresence>
        </div>
        {review.shortQuote && (
          <button
            onClick={toggleExpand}
            className="mt-4 text-blue-600 font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isExpanded}
            aria-controls={`review-content-${review.id}`}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        body {
          font-family: "Inter", sans-serif;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .team-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-button {
          background: #1e40af;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .cta-button:hover {
          background: #1e3a8a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }

        .review-card {
          position: relative;
          overflow: hidden;
          background: linear-gradient(145deg, #ffffff, #f8fafc);
        }

        .review-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1e40af, #3b82f6);
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .reviews-container {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 1rem;
          }

          .review-card {
            flex: 0 0 90%;
            scroll-snap-align: center;
            margin-right: 1rem;
          }
        }
      `}</style>

      <SEOMetadata />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Stone Works Remodeling
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Metro Detroit bathrooms with premium craftsmanship
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact" className="group">
              <div className="inline-flex items-center cta-button text-white px-6 py-3 rounded-lg text-lg font-semibold">
                Get in Touch
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </div>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="fade-in"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
              <p className="text-gray-600 text-base sm:text-lg mb-4">
                Welcome to Stone Works Remodeling! I’m Valjon Qejvani, and my journey into construction began as a teenager working with my father and with a strong foundation in engineering. After earning my degree from Western Michigan University and honing my skills working alongside my dad, I realized my true passion lay in building and remodeling spaces. Inspired by my father’s footsteps, I left the engineering field to start my own business, focusing on transforming homes and bringing clients’ visions to life.

              </p>
              <p className="text-gray-600 text-base sm:text-lg">
                At Stone Works Remodeling, we specialize in bathroom remodels, combining technical expertise with a genuine love for craftsmanship. We’re passionate about creating beautiful, functional spaces that enhance your home’s value and your quality of life. Let us help you turn your dream bathroom into reality!              </p>
            </motion.div>
            <motion.div
              className="relative h-64 sm:h-96 fade-in"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2025-05-01+at+4.19.29+AM.jpeg"
                alt="Luxury bathroom remodel by Stone Works Remodeling in Metro Detroit, MI"
                fill
                className="object-cover rounded-lg shadow-lg h-[130%]"
                sizes="(max-width: 768px) 100vw, 100vw"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                description: "Over two decades of delivering superior bathroom remodels.",
              },
              {
                title: "Personalized Service",
                description: "Tailored solutions designed to bring your vision to life.",
              },
              {
                title: "Premium Materials",
                description: "High-quality for lasting beauty and durability.",
              },
              {
                title: "Trusted Warranties",
                description: "Comprehensive warranties for your confidence and peace of mind.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      {/* <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
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
      </section> */}

      {/* Reviews Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Client Reviews
          </motion.h2>
          <div className="reviews-container grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          {/* Structured Data for Reviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                reviews.map((review) => ({
                  "@context": "https://schema.org",
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: review.name,
                  },
                  reviewBody: review.quote,
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: 5,
                    bestRating: 5,
                  },
                  itemReviewed: {
                    "@type": "Organization",
                    name: "Stone Works Remodeling",
                  },
                }))
              ),
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Bathroom Today
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Partner with Metro Detroit’s premier remodeling experts to create your dream bathroom.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center cta-button text-white px-6 py-3 rounded-lg text-lg font-semibold"
            >
              Schedule a Free Consultation
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts, categories } from "@/lib/blogPosts"; // Import from lib/blogPosts.ts

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <title>Stone Works Remodeling | Blog</title>
      <meta
        name="description"
        content="Explore Stone Works Remodeling’s blog for expert tips on stone-based bathroom remodeling, design trends, project spotlights, and company updates."
      />
      <meta
        name="keywords"
        content="Stone Works Remodeling blog, stone bathroom remodeling, stone design tips, bathroom renovation trends"
      />
      <meta property="og:title" content="Stone Works Remodeling | Blog" />
      <meta
        property="og:description"
        content="Discover expert advice, stone design trends, and remodeling inspiration on the Stone Works Remodeling blog."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.stoneworksremodeling.com/blog" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" />
      <link rel="canonical" href="https://www.stoneworksremodeling.com/blog" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Stone Works Remodeling Blog",
            url: "https://www.stoneworksremodeling.com/blog",
            description:
              "Stone Works Remodeling’s blog offers expert advice on stone-based bathroom remodeling, design trends, and project inspiration.",
            publisher: {
              "@type": "Organization",
              name: "Stone Works Remodeling",
              url: "https://www.stoneworksremodeling.com/",
              logo: "https://www.stoneworksremodeling.com/images/logo.png",
            },
          }),
        }}
      />
    </>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  // Handle scroll for future sticky header (commented out for now)
  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter and search posts
  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "all" || post.category === selectedCategory) &&
      (searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c");
          background-size: cover;
          background-position: center;
        }
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
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
          .filter-button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          .sidebar {
            margin-top: 2rem;
          }
        }
      `}</style>

      <SEOMetadata />

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Filters and Search */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-button px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setCurrentPage(1);
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {paginatedPosts.length > 0 ? (
                  paginatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="blog-card bg-white rounded-lg shadow-lg overflow-hidden fade-in visible"
                    >
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block bg-gold-100 text-gold-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                          {categories.find((c) => c.id === post.category)?.label || "Uncategorized"}
                        </span>
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
 ross-domestic-partner: true
                          <span className="mx-2">•</span>
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-16">
                    <p className="text-gray-500 mb-4">No posts match your current filters</p>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setSearchTerm("");
                        setCurrentPage(1);
                      }}
                      className="text-navy-600 font-medium hover:text-navy-800"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-full ${
                        currentPage === page
                          ? "bg-navy-600 text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 sidebar">
              {/* Recent Posts */}
              <div className="bg-navy-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.id}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-navy-600 hover:text-navy-800 font-medium"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-navy-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`text-navy-600 hover:text-navy-800 font-medium ${
                          selectedCategory === category.id ? "underline" : ""
                        }`}
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Subscribe for the latest stone design tips and remodeling updates.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-navy-50 to-navy-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 fade-in visible">
            Transform Your Bathroom with Stone Works Remodeling
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 fade-in visible">
            Contact our expert team to bring your bathroom vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl fade-in visible"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
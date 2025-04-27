import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts, categories } from "@/lib/blogPosts";
import { ArrowRight, Clock, User } from "lucide-react";
import sanitizeHtml from "sanitize-html";

// Define the params type for the dynamic route
type BlogParams = {
  slug: string;
};

// Define the props type for the page
interface BlogPostPageProps {
  params: Promise<BlogParams>;// params is a plain object, not a Promise
}

// Metadata generation
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Ensure slug exists
  if (!slug) {
    console.error("Slug is undefined");
    return {
      title: "Blog Post Not Found | Stone Works Remodeling",
      description: "The requested blog post could not be found.",
    };
  }

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Stone Works Remodeling",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Stone Works Remodeling Blog`,
    description: post.excerpt,
    keywords: `${post.title.toLowerCase()}, stone works remodeling, bathroom remodeling, ${post.category}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      url: `https://www.stoneworksremodeling.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `https://www.stoneworksremodeling.com/blog/${post.slug}`,
    },
  };
}

// Page component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  console.log("Params:", params); // Check what params are received
  console.log("All posts:", blogPosts); // Verify posts are loaded

  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  console.log("Found post:", post); // Check if post is found

  if (!post) {
    console.error(`Post not found for slug: ${resolvedParams.slug}`);
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="hero-bg py-24 sm:py-32 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${post.image})`,
        }}
      >
        <div className="container mx-auto px-4">
          <span className="inline-block bg-gold-100 text-gold-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
            {categories.find((c) => c.id === post.category)?.label}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 fade-in visible">
            {post.title}
          </h1>
          <div className="flex justify-center items-center text-sm text-gray-200">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg text-gray-700 fade-in visible"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(post.content, {
                  allowedTags: [
                    "p", "h1", "h2", "h3", "h4", "h5", "h6",
                    "ul", "ol", "li", "blockquote", "pre",
                    "strong", "em", "u", "s", "code", "hr",
                    "br", "a", "img", "div", "span", "table",
                    "thead", "tbody", "tr", "th", "td"
                  ],
                  allowedAttributes: {
                    a: ["href", "name", "target", "rel"],
                    img: ["src", "alt", "width", "height"],
                    "*": ["class", "style"], // Allow class and style attributes globally
                  },
                  allowedClasses: {
                    "*": ["*"], // Allow all classes
                  },
                }),
              }}
            />
            <div className="mt-8">
              <Link
                href="/blog"
                className="text-navy-600 hover:text-navy-800 font-medium flex items-center"
              >
                ← Back to Blog
              </Link>
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
            Inspired by this article? Contact our expert team to bring your stone-inspired bathroom vision to life.
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Stone Works Remodeling",
              logo: {
                "@type": "ImageObject",
                url: "https://www.stoneworksremodeling.com/images/logo.png",
              },
            },
            datePublished: post.date,
            image: post.image,
            articleSection: categories.find((c) => c.id === post.category)?.label,
            url: `https://www.stoneworksremodeling.com/blog/${post.slug}`,
          }),
        }}
      />
    </div>
  );
}

// Generate static params for static site generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
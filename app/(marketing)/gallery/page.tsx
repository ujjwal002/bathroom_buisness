"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X, Filter, Search } from "lucide-react";

// Interfaces for TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  type: "before-after" | "recent";
  featured?: boolean;
}

interface Filter {
  id: string;
  label: string;
}

interface LightboxImage {
  src: string;
  title: string;
  description: string;
  imageType: "before" | "after" | "single";
  projectId: number;
}

// SEO Metadata Component
function SEOMetadata() {
  return (
    <>
      <title>stone work remodeling | Project Gallery</title>
      <meta
        name="description"
        content="Explore stone work remodeling's stunning bathroom remodeling projects, including before & after transformations and recent designs. Get inspired for your dream bathroom!"
      />
      <meta
        name="keywords"
        content="bathroom remodeling gallery, before and after bathroom, shower conversion, walk-in tubs, stone work remodeling projects"
      />
      <meta property="og:title" content="stone work remodeling | Project Gallery" />
      <meta
        property="og:description"
        content="Discover our portfolio of bathroom remodels and transformations. Schedule a free consultation today!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stone work remodeling.com/gallery" />
      <meta property="og:image" content="https://stone work remodeling.com/images/gallery-og-image.jpg" />
      <link rel="canonical" href="https://stone work remodeling.com/gallery" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "stone work remodeling Project Gallery",
            description: "A collection of stone work remodeling's bathroom remodeling projects showcasing before and after transformations.",
            url: "https://stone work remodeling.com/gallery",
            itemListElement: [
              {
                "@type": "CreativeWork",
                name: "Master Bathroom Renovation",
                description: "Complete remodel with custom shower and premium tile.",
                image: "https://stone work remodeling.com/images/gallery/master-bathroom.jpg",
              },
              {
                "@type": "CreativeWork",
                name: "Shower Conversion",
                description: "Tub-to-shower conversion with frameless glass.",
                image: "https://stone work remodeling.com/images/gallery/shower-conversion.jpg",
              },
            ],
          }),
        }}
      />
    </>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"before-after" | "recent">("before-after");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Expanded project data with more realistic entries and some featured projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Luxury Master Bathroom",
      description: "Complete remodel with marble tile, freestanding soaker tub, and custom glass shower enclosure.",
      category: "bathroom-remodel",
      beforeImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/Gemini_Generated_Image_7bprdt7bprdt7bpr.jpeg",
      afterImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "before-after",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Shower Conversion",
      description: "Tub-to-shower conversion with frameless glass, rainfall showerhead, and built-in niche storage.",
      category: "shower-conversion",
      beforeImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      afterImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "before-after",
      featured: true,
    },
    {
      id: 3,
      title: "Accessible Walk-in Tub",
      description: "ADA-compliant walk-in tub with hydrotherapy jets, anti-slip flooring, and integrated seat.",
      category: "walk-in-tub",
      beforeImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      afterImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "before-after",
    },
    {
      id: 4,
      title: "Contemporary Guest Bathroom",
      description: "Full renovation with floating vanity, LED lighting, and porcelain tile throughout.",
      category: "bathroom-remodel",
      beforeImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      afterImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "before-after",
    },
    {
      id: 5,
      title: "Spa-Inspired Master Suite",
      description: "Luxury remodel with heated floors, digital shower system, and custom cabinetry.",
      category: "bathroom-remodel",
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "recent",
      featured: true,
    },
    {
      id: 6,
      title: "Walk-in Shower Installation",
      description: "Zero-threshold shower with bench seating, multiple showerheads, and decorative accent tile.",
      category: "shower-conversion",
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "recent",
    },
    {
      id: 7,
      title: "Therapeutic Walk-in Tub",
      description: "Safety-focused bathroom with quick-drain walk-in tub, grab bars, and comfort-height toilet.",
      category: "walk-in-tub",
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "recent",
    },
    {
      id: 8,
      title: "Mid-Century Modern Update",
      description: "Period-appropriate renovation with subway tile, penny flooring, and vintage-inspired fixtures.",
      category: "bathroom-remodel",
      image: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "recent",
    },
    {
      id: 9,
      title: "Small Bathroom Transformation",
      description: "Space-maximizing remodel with corner shower, wall-mounted toilet, and built-in storage solutions.",
      category: "bathroom-remodel",
      beforeImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      afterImage: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/image.jpg",
      type: "before-after",
    },
  ];

  const filters: Filter[] = [
    { id: "all", label: "All Projects" },
    { id: "bathroom-remodel", label: "Bathroom Remodels" },
    { id: "shower-conversion", label: "Shower Conversions" },
    { id: "walk-in-tub", label: "Walk-in Tubs" },
  ];

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter projects based on tab, category, search, and sort featured to top
  const filteredProjects: Project[] = projects
    .filter(
      (project) =>
        project.type === activeTab &&
        (selectedFilter === "all" || project.category === selectedFilter) &&
        (searchTerm === "" ||
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  const openLightbox = (project: Project, imageType: "before" | "after" | "single") => {
    setLightboxImage({
      src: imageType === "before" ? project.beforeImage! : imageType === "after" ? project.afterImage! : project.image!,
      title: project.title,
      description: project.description,
      imageType,
      projectId: project.id,
    });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!lightboxImage) return;
    const currentProject = projects.find((p) => p.id === lightboxImage.projectId);
    const currentIndex = filteredProjects.findIndex((p) => p.id === currentProject?.id);
    const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= 0 && nextIndex < filteredProjects.length) {
      const nextProject = filteredProjects[nextIndex];
      setLightboxImage({
        src:
          activeTab === "before-after"
            ? lightboxImage.imageType === "before"
              ? nextProject.beforeImage!
              : nextProject.afterImage!
            : nextProject.image!,
        title: nextProject.title,
        description: nextProject.description,
        imageType: lightboxImage.imageType,
        projectId: nextProject.id,
      });
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    project: Project,
    imageType: "before" | "after" | "single"
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      openLightbox(project, imageType);
    }
  };

  // Handle lightbox keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateLightbox("next");
      } else if (e.key === "ArrowLeft") {
        navigateLightbox("prev");
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetadata />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-gray-900 opacity-10 pattern-grid"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Bathroom Transformation Gallery
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Discover our portfolio of stunning bathroom renovations and get inspired for your own dream space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            Request Your Free Design Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <div 
        className={`sticky top-0 z-40 bg-white shadow-md transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Tabs */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex bg-gray-100 rounded-full p-1">
                <button
                  className={`tab-button px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "before-after" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveTab("before-after");
                  }}
                >
                  Before & After
                </button>
                <button
                  className={`tab-button px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === "recent" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
                  }`}
                  onClick={() => {
                    setActiveTab("recent");
                  }}
                >
                  Recent Projects
                </button>
              </div>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
              <span className="hidden md:inline text-sm text-gray-500 mr-2 flex items-center">
                <Filter className="h-4 w-4 mr-1" /> Filter:
              </span>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Featured Project Spotlight (Only on Before & After tab) */}
          {activeTab === "before-after" && filteredProjects.some(p => p.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Transformations</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.filter(p => p.featured).slice(0, 2).map((project) => (
                  <div key={`featured-${project.id}`} className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="relative h-96">
                      <div 
                        className="absolute inset-0 before-image cursor-pointer transition-opacity duration-500 ease-in-out"
                        style={{backgroundImage: `url(${project.beforeImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        onClick={() => openLightbox(project, "before")}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                          <span className="text-white font-bold text-xl tracking-wide bg-red-500 bg-opacity-80 px-4 py-2 rounded-md shadow-lg">BEFORE</span>
                        </div>
                      </div>
                      <div 
                        className="absolute inset-0 after-image cursor-pointer transition-all duration-500 ease-in-out opacity-0 hover:opacity-100"
                        style={{backgroundImage: `url(${project.afterImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                        onClick={() => openLightbox(project, "after")}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                          <span className="text-white font-bold text-xl tracking-wide bg-green-500 bg-opacity-80 px-4 py-2 rounded-md shadow-lg">AFTER</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Featured</span>
                      </div>
                      <p className="text-gray-600 text-base mt-2">{project.description}</p>
                      <div className="mt-4 text-sm text-gray-500">
                        Hover over image to see transformation
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Gallery - Wall Display */}
          {filteredProjects.length > 0 ? (
            <div className="gallery-wall-grid">
              {activeTab === "before-after" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.filter(p => !p.featured || selectedFilter !== "all").map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 w-1/2 z-10">
                          <div
                            className="relative w-full h-full cursor-pointer"
                            onClick={() => openLightbox(project, "before")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => handleKeyDown(e, project, "before")}
                          >
                            <Image
                              src={project.beforeImage!}
                              alt={`Before ${project.title}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                              loading="lazy"
                              // width={500}
                              // height={500}
                            />
                            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
                              BEFORE
                            </div>
                          </div>
                        </div>

                        <div className="absolute inset-0 ml-[50%] w-1/2">
                          <div
                            className="relative w-full h-full cursor-pointer"
                            onClick={() => openLightbox(project, "after")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => handleKeyDown(e, project, "after")}
                          >
                            <Image
                              src={project.afterImage!}
                              alt={`After ${project.title}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                              loading="lazy"
                              // width={500}
                              // height={500}
                            />
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">
                              AFTER
                            </div>
                          </div>
                        </div>
                        
                        {/* Divider Line */}
                        <div className="absolute inset-y-0 left-1/2 w-1 bg-white z-20 transform -translate-x-1/2"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                        <button
                          onClick={() => openLightbox(project, "before")}
                          className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                          View Transformation
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProjects.map((project) => (
                    <div 
                      key={project.id} 
                      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                      <div
                        className="relative h-64 cursor-pointer"
                        onClick={() => openLightbox(project, "single")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyDown(e, project, "single")}
                      >
                        <Image
                          src={project.image!}
                          alt={project.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                        {project.featured && (
                          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            FEATURED
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{project.description}</p>
                        <button
                          onClick={() => openLightbox(project, "single")}
                          className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                        >
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-4">No projects match your current filters</div>
              <button
                onClick={() => {
                  setSelectedFilter("all");
                  setSearchTerm("");
                }}
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 sm:mb-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Ready to transform your bathroom?</h2>
                <p className="text-gray-700">Our design experts are ready to help bring your vision to life.</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm">
          <div 
            className="absolute inset-0 z-0"
            onClick={closeLightbox}
          ></div>
          <div className="relative z-10 bg-white rounded-xl max-w-5xl w-full max-h-[90vh] flex flex-col">
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 bg-opacity-60 hover:bg-opacity-100 rounded-full p-2 transition-all z-20"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative flex-grow overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              {activeTab === "before-after" && (
                <div className="absolute top-4 left-4 bg-opacity-80 bg-black text-white text-sm px-3 py-1 rounded">
                  {lightboxImage.imageType === "before" ? (
                    <span className="text-red-400 font-semibold">BEFORE</span>
                  ) : (
                    <span className="text-green-400 font-semibold">AFTER</span>
                  )}
                </div>
              )}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-100 text-white rounded-full p-3 transition-all"
                onClick={() => navigateLightbox("prev")}
                disabled={filteredProjects.findIndex((p) => p.id === lightboxImage.projectId) === 0}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-100 text-white rounded-full p-3 transition-all"
                onClick={() => navigateLightbox("next")}
                disabled={
                  filteredProjects.findIndex((p) => p.id === lightboxImage.projectId) === filteredProjects.length - 1
                }
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 bg-white rounded-b-xl">
              <h3 className="text-2xl font-bold text-gray-900">{lightboxImage.title}</h3>
              <p className="text-gray-600 text-base mt-2">{lightboxImage.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  Project {filteredProjects.findIndex((p) => p.id === lightboxImage.projectId) + 1} of {filteredProjects.length}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Request Similar Design
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for effects */}
      <style jsx global>{`
        .pattern-grid {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .before-image:hover {
          opacity: 0.7;
        }
        
        .after-image {
          z-index: 5;
        }

        /* Smoother image load transition */
        img {
          transition: opacity 0.3s ease-in-out;
        }
        
        @media (max-width: 768px) {
          .gallery-wall-grid .grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
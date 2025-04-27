"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

// Define the GalleryImage type
interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
}

// Combine all images into one gallery array using the data you provided
const galleryImages: GalleryImage[] = [
  // From beforeAfterImages array
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/Gemini_Generated_Image_7bprdt7bprdt7bpr.webp",
    alt: "Stone bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image.webp",
    alt: "Stone bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image+(2).webp",
    alt: "Tub-to-shower conversion in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/_QE_wu8yh888nrX1JUzYt.webp",
    alt: "Tub-to-shower conversion in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/image+(1).webp",
    alt: "Walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/w6HJzxSeslcbuk0sJgPQc.webp",
    alt: "Walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  // From recentProjects array
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
    alt: "Luxury stone bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
    alt: "Modern stone shower conversion in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
  {
    src: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
    alt: "Accessible walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
    width: 500,
    height: 300,
    blurDataURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPk43HLQAAAABJRU5ErkJggg==",
  },
];

// Categories for filtering
const categories = [
  { id: "all", name: "All Projects" },
  { id: "bathroom", name: "Bathroom Remodels" },
  { id: "shower", name: "Shower Conversions" },
  { id: "tub", name: "Walk-in Tubs" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Handle image click to open modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  // Handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Filter images based on category
  const filterImages = () => {
    if (activeCategory === "all") return galleryImages;
    
    return galleryImages.filter(img => {
      const alt = img.alt.toLowerCase();
      if (activeCategory === "bathroom" && alt.includes("bathroom")) return true;
      if (activeCategory === "shower" && alt.includes("shower")) return true;
      if (activeCategory === "tub" && alt.includes("tub")) return true;
      return false;
    });
  };

  const filteredImages = filterImages();

  return (
    <>
      <Head>
        <title>Stone Works Remodeling Gallery | Bathroom Renovations in Metro Detroit, MI</title>
        <meta name="description" content="Explore our gallery of high-quality bathroom remodels, shower conversions, and walk-in tub installations by Stone Works Remodeling in Metro Detroit, Michigan." />
        <meta name="keywords" content="bathroom remodeling, shower conversion, walk-in tub, Metro Detroit, Michigan, Stone Works Remodeling, gallery" />
        <meta property="og:title" content="Stone Works Remodeling Project Gallery" />
        <meta property="og:description" content="View our portfolio of stunning bathroom renovations, shower conversions, and accessible bathroom solutions in Metro Detroit, MI." />
        <meta property="og:image" content={galleryImages[0].src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.yourwebsite.com/gallery" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "Stone Works Remodeling Project Gallery",
              "description": "Bathroom remodeling projects in Metro Detroit, Michigan.",
              "image": "${galleryImages[0].src}"
            }
          `}
        </script>
      </Head>

      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Project Gallery</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of high-quality bathroom renovations in Metro Detroit, Michigan. 
              Our gallery showcases the craftsmanship and attention to detail that goes into every 
              Stone Works Remodeling project.
            </p>
          </section>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative aspect-video cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL}
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">{image.alt.split(" by ")[0]}</h3>
                  <p className="text-sm text-gray-500 mt-1">Metro Detroit, Michigan</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no images match filter */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No projects found for this category.</p>
              <button 
                onClick={() => setActiveCategory("all")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}

          {/* Image modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
              <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      layout="fill"
                      objectFit="contain"
                      quality={100}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{selectedImage.alt.split(" by ")[0]}</h3>
                    <p className="text-gray-600 mt-2">
                      Professional bathroom remodeling services in Metro Detroit, Michigan, 
                      delivered with quality craftsmanship and attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Transform Your Bathroom?</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your bathroom remodeling project. Our team of experts 
              is ready to help you create the bathroom of your dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
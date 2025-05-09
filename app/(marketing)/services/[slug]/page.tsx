import { notFound } from "next/navigation";
import ServiceContent from "@/components/ServiceContent";
import services from "@/lib/services";

// Services data (ideally imported from a shared file)
// const services = [
//   {
//     id: "bathroom-remodeling",
//     title: "Bathroom Remodeling",
//     shortDescription: "Complete bathroom transformation services with premium materials and expert craftsmanship.",
//     longDescription: "Our bathroom remodeling services transform outdated spaces into beautiful, functional areas that reflect your personal style. We handle everything from design to installation, using premium stone materials and the latest techniques to ensure a stunning result that increases your home's value.",
//     features: [
//       "Custom design consultations",
//       "Premium selection",
//       "Fixture upgrades and replacements",
//       "Lighting improvements",
//       "Flooring installation",
//       "Waterproofing and moisture control",
//     ],
//     benefits: [
//       "Increased home value",
//       "Enhanced functionality",
//       "Improved energy efficiency",
//       "Better use of space",
//       "Modern aesthetic appeal",
//     ],
//     imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/NctOfmDbqGoQGM2Qm9a8C.webp",
//     imageAlt: "Luxury bathroom remodel in Metro Detroit, MI by Stone Works Remodeling",
//     icon: "✨",
//   },
//   {
//     id: "shower-conversions",
//     title: "Tub-to-Shower Conversions",
//     shortDescription: "Modern shower solutions that maximize space and accessibility.",
//     longDescription: "Our tub-to-shower conversion service transforms your outdated bathtub into a stylish, accessible shower. Perfect for homeowners looking to update their bathroom's functionality while creating a more contemporary aesthetic. Our conversions are completed quickly and with minimal disruption to your home.",
//     features: [
//       "Custom shower designs",
//       "Stone and tile options",
//       "Glass door installations",
//       "Accessibility features",
//       "Rapid installation process",
//       "Water-saving fixtures",
//     ],
//     benefits: [
//       "Improved accessibility",
//       "Easier cleaning and maintenance",
//       "Modern appearance",
//       "Space optimization",
//       "Water conservation",
//     ],
//     imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/i5a_set3C7bnEDegPuZld.webp",
//     imageAlt: "Modern shower conversion in Metro Detroit, MI by Stone Works Remodeling",
//     icon: "🚿",
//   },
//   {
//     id: "walk-in-tubs",
//     title: "Walk-In Tub Installation",
//     shortDescription: "Safety-focused bathroom solutions that don't compromise on luxury.",
//     longDescription: "Our walk-in tub installations combine safety and luxury to create accessible bathing experiences for people of all abilities. These specialized tubs feature easy entry, comfortable seating, and therapeutic options like hydrotherapy jets. Perfect for aging in place or anyone with mobility concerns.",
//     features: [
//       "Low threshold entry doors",
//       "Anti-slip flooring",
//       "Built-in seating",
//       "Hydrotherapy options",
//       "Fast-fill and drain technology",
//       "ADA compliant designs",
//     ],
//     benefits: [
//       "Enhanced safety",
//       "Independent bathing",
//       "Therapeutic benefits",
//       "Comfort and relaxation",
//       "Aging-in-place solution",
//     ],
//     imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/krY1iLp90R9l3kcrrUhu-.webp",
//     imageAlt: "Accessible walk-in tub installation in Metro Detroit, MI by Stone Works Remodeling",
//     icon: "🛁",
//   },
//   {
//     id: "stone-countertops",
//     title: "Stone Countertop Installation",
//     shortDescription: "Beautiful, durable surfaces for bathrooms and kitchens.",
//     longDescription: "Our countertop installation service brings elegance and durability to your bathroom or kitchen. We offer a wide selection of premium natural and engineered stone options, including granite, marble, quartz, and more. Each installation is precisely measured and expertly fitted for a flawless finish.",
//     features: [
//       "Custom measurements and templates",
//       "Wide selection of materials",
//       "Expert fabrication and finishing",
//       "Sink and fixture coordination",
//       "Sealing and maintenance education",
//       "Backsplash options",
//     ],
//     benefits: [
//       "Exceptional durability",
//       "Increased home value",
//       "Heat resistance",
//       "Unique natural patterns",
//       "Timeless elegance",
//     ],
//     imageSrc: "https://stoneworksremodlling.s3.ap-south-1.amazonaws.com/webp/Gemini_Generated_Image_7bprdt7bprdt7bpr.webp",
//     imageAlt: "Stone countertop installation in Metro Detroit, MI by Stone Works Remodeling",
//     icon: "💎",
//   },
// ];

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found | Stone Works Remodeling",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | Stone Works Remodeling | Metro Detroit, MI`,
    description: service.shortDescription,
    keywords: `${service.title.toLowerCase()}, bathroom remodeling, metro detroit, michigan, stone works remodeling`,
    openGraph: {
      title: `${service.title} | Stone Works Remodeling`,
      description: service.shortDescription,
      images: [service.imageSrc],
      type: "website",
      url: `https://www.stoneworksremodeling.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Stone Works Remodeling`,
      description: service.shortDescription,
      images: [service.imageSrc],
    },
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pt-16">
      <ServiceContent service={service} />
    </main>
  );
}
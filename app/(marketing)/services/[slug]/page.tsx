import { notFound } from "next/navigation";
import ServiceContent from "@/components/ServiceContent";
import services from "@/lib/services";
import { Metadata } from "next";

// Define the props type for dynamic routes
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return services.map((service: typeof services[number]) => ({
    slug: service.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
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

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
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
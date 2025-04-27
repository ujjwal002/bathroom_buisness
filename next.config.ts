import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'www.stoneworksremodeling.com',
      'stoneworkremodeling.s3.ap-south-1.amazonaws.com', // corrected spelling
      'stoneworksremodlling.s3.ap-south-1.amazonaws.com', // keep existing if still needed
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
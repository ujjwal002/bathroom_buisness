import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';


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

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true', // This will activate the analyzer when ANALYZE=true
});

export default bundleAnalyzerConfig(nextConfig);
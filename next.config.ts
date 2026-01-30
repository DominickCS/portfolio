import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: ''
    },
    {
      protocol: 'https',
      hostname: 'cms.dominickcs.com',
      port: ''
    }]
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.paymanai.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;

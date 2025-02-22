import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.paymanai.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;

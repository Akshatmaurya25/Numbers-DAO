import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.paymanai.com',"avataaars.io", "drive.google.com","images.unsplash.com","images.pexels.com",'hebbkx1anhila5yf.public.blob.vercel-storage.com' , 'cartesi.io' , 'cdn.sanity.io']
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;

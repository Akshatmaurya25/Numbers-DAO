import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'www.paymanai.com',
      'source.unsplash.com',
      'avataaars.io',
      'drive.google.com',
      'images.unsplash.com',
      'images.pexels.com',
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'cartesi.io',
      'cdn.sanity.io',
      'pbs.twimg.com',
      "media.tenor.com"
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

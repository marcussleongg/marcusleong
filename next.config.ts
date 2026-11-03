import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tkjujwzxozukhsrntaij.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/media/**',
      },
    ],
  },
  // Serves the public Supabase media bucket from this site's own domain
  async rewrites() {
    return [
      {
        source: '/files/:path*',
        destination: 'https://tkjujwzxozukhsrntaij.supabase.co/storage/v1/object/public/media/:path*',
      },
    ];
  },
};

export default nextConfig;

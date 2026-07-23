import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Retired service pages (offerings dropped July 2026). Mirrors the .htaccess
  // rules used on Apache hosting — Vercel ignores .htaccess.
  async redirects() {
    return [
      { source: '/services/technology', destination: '/services', permanent: true },
      { source: '/services/graphic-design', destination: '/services', permanent: true },
      { source: '/services/video-production', destination: '/services', permanent: true },
      { source: '/services/digital-marketing', destination: '/services', permanent: true },
    ];
  },
};

export default nextConfig;

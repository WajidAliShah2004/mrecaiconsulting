import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for IONOS Apache hosting (see public/.htaccess)
  output: 'export',
};

export default nextConfig;

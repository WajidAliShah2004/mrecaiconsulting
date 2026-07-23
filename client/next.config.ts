import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pin the workspace root to this app. A stray package-lock.json in the user
  // profile directory otherwise makes Turbopack pick C:\Users\<user> as the
  // root, which corrupts the React Client Manifest (blank pages in dev).
  turbopack: {
    root: __dirname,
  },
  // Dev-only: the site is sometimes opened via the machine's LAN IP instead of
  // localhost; without this Next blocks its dev scripts cross-origin and the
  // page renders without JavaScript (animated content stays invisible).
  allowedDevOrigins: ['172.26.32.1'],
};

export default nextConfig;

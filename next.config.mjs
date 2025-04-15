/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
    unoptimized: true,
  },
  // Remove the static export configuration for Netlify which handles SSR
  // output: 'export',
  // distDir: 'out',
};

export default nextConfig;

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
  output: 'export',
  distDir: 'out',
};

export default nextConfig;

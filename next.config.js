/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "akamai",
  },
  basePath: "/web-app",
  assetPrefix: "/web-app",
  env: {
    NEXT_PUBLIC_BASEPATH: "/web-app",
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;

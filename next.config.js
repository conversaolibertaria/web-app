/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
  },
  basePath: '/web-app',
  assetPrefix: '/web-app',
  env: {
    NEXT_PUBLIC_FAVICON: '/web-app',
  },
}

module.exports = nextConfig

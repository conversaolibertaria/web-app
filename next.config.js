/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/web-app',
  assetPrefix: '/web-app',
  env: {
    NEXT_PUBLIC_BASEPATH: '/web-app',
  },
}

module.exports = nextConfig

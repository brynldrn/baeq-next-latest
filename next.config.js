/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['dummyimage.com', 'media.graphassets.com']
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['https://image.tmdb.org/t/p/original'],
  },
};

module.exports = nextConfig;

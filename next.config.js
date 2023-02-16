/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

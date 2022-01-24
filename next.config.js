/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
};

module.exports = withOptimizedImages(nextConfig);

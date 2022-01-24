/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/wirebug.github.io/" : "",
  images: {
    disableStaticImages: true,
  },
  handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
};

module.exports = withOptimizedImages(nextConfig);

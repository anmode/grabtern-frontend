const webpack = require("webpack");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    );
    return config;
  },
});

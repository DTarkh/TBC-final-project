const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyjson.com"],
    domains: ['i.postimg.cc']
  },
};

module.exports = withNextIntl(nextConfig);

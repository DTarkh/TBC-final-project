const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.postimg.cc', "avatars.githubusercontent.com", "images.unsplash.com"],
    // domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = withNextIntl(nextConfig);

// module.exports = {
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// }

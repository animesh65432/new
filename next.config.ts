const { withHydrationOverlay } = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const baseNextConfig = {
  images: {
    domains: ['localhost'], // Allow images from 'localhost'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
  },
  // Add other Next.js configurations here if needed
};

// Merge with `withHydrationOverlay` to include hydration overlay configuration
const nextConfig = withHydrationOverlay({
  /**
   * Optional: Change the root selector if you're using the app directory in Next.js.
   * Default for pages directory: '#__next'
   * Default for app directory: 'main'
   */
  appRootSelector: "main", // Change this to suit your project's root element
})(baseNextConfig);

module.exports = nextConfig;

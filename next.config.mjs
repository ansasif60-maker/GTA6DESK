/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image imports
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for static compatibility
  trailingSlash: false,
  // Disable x-powered-by header
  poweredByHeader: false,
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/index.html' },
        { source: '/categories', destination: '/categories.html' },
        { source: '/weapons', destination: '/weapons.html' },
        { source: '/characters', destination: '/characters.html' },
        { source: '/missions', destination: '/missions.html' },
        { source: '/database', destination: '/database.html' },
        { source: '/map', destination: '/map.html' },
        { source: '/guides', destination: '/guides.html' },
        { source: '/financial', destination: '/financial.html' },
        { source: '/news', destination: '/news.html' },
        { source: '/leonida', destination: '/leonida.html' },
        { source: '/roi-calculator', destination: '/roi-calculator.html' },
        { source: '/about', destination: '/about.html' },
        { source: '/contact', destination: '/contact.html' },
        { source: '/disclaimer', destination: '/disclaimer.html' },
        { source: '/privacy-policy', destination: '/privacy-policy.html' },
        { source: '/terms-of-service', destination: '/terms-of-service.html' },
        { source: '/article-lucia-jason', destination: '/article-lucia-jason.html' },
        { source: '/article-release-window', destination: '/article-release-window.html' },
        { source: '/article-take-two-earnings', destination: '/article-take-two-earnings.html' },
      ],
    };
  },
};

export default nextConfig;

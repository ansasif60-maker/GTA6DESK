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
};

export default nextConfig;

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
  async redirects() {
    return [
      {
        source: '/article-take-two-earnings',
        destination: '/financial',
        permanent: true,
      },
      {
        source: '/article-release-window',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/article-lucia-jason',
        destination: '/characters',
        permanent: true,
      },
      {
        source: '/vehicles',
        destination: '/database',
        permanent: true,
      },
      {
        source: '/weapons-intel',
        destination: '/weapons',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

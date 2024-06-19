/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/:path*',
        destination:
          'https://akuocoop.lendosphere.com?akuocoop-devient-lendosphere',
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/:path*',
        destination:
          'https://akuocoop.lendosphere.com/?akuocoop-devient-lendosphere=1',
        basePath: false,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

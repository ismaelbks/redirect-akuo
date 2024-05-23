/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/:path*',
        destination: 'https://www.akuocoop.com/:path*',
        basePath: false,

        permanent: true,
      },
    ];
  },
};

export default nextConfig;

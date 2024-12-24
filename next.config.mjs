/** @type {import('next').NextConfig} */
const nextConfig = {
  // Preserve existing image configuration
  images: {
    domains: ['api.placeholder.com'],
  },
  // Add redirect configuration
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.viralvisions.live',
          },
        ],
        destination: 'https://viralvisions.live',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.viralvisions.live',
          },
        ],
        destination: 'https://viralvisions.live/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
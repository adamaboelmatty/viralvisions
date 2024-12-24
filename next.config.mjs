/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.placeholder.com',
      'p16-sign-useast7.tiktokcdn-us.com', 
      'p16-sign.tiktokcdn-us.com',
      'p19-sign.tiktokcdn-us.com',
    ],
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
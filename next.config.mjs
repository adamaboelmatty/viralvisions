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
  // Remove the redirects section for now to debug the sitemap issue
}

export default nextConfig
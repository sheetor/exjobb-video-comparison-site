/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://exjobb-video-comparison-site-git-db-online-maybe-sheetor.vercel.app/:path*',
      },
    ]
  }
}

module.exports = nextConfig

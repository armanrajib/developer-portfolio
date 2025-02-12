import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack: config => {
    config.resolve.alias.canvas = false
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '/icons/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/devicon@latest/icons/**'
      }
    ],
    dangerouslyAllowSVG: true, // ✅ Enable SVG support
    contentSecurityPolicy:
      "default-src 'self'; img-src *; style-src 'unsafe-inline';"
  }
}

export default nextConfig

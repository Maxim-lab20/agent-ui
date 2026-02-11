import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  // basePath will be set via environment variable in GitHub Actions
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Disable server-side features for static export
  images: {
    unoptimized: true
  },
  // Add trailing slash for proper GitHub Pages routing
  trailingSlash: true,
  // Skip trailing slash redirect for static export
  skipTrailingSlashRedirect: true
}

export default nextConfig

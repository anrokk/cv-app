import type { NextConfig } from "next"

const backendUrl = process.env.BACKEND_URL ?? "http://localhost:8080"
const normalizedBackendUrl = backendUrl.replace(/\/$/, "")

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${normalizedBackendUrl}/api/:path*`,
      },
    ]
  },
}

export default nextConfig

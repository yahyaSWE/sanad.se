import type { NextConfig } from "next";

// Vercel's Next.js adapter manages the deployment output automatically.
// `output: "standalone"` is intended for self-hosted/Docker deployments and
// currently conflicts with the Vercel adapter in Next.js 16.3.
const nextConfig: NextConfig = {};

export default nextConfig;

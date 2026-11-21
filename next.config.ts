import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to /out — deployable on Netlify, GitHub Pages or Vercel.
  output: "export",
  images: { unoptimized: true },
  // Hide the floating "N" dev-tools badge in `npm run dev`.
  devIndicators: false,
};

export default nextConfig;

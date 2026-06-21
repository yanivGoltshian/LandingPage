import type { NextConfig } from "next";

// Static export → fully static `out/`, hostable on any CDN for ~$0.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

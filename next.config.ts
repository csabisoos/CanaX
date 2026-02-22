import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CanaX",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liigaporssi.fi",
      },
    ],
  },
};

export default nextConfig;

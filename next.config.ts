import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  serverExternalPackages: ["adm-zip"],
  experimental: {
    proxyClientMaxBodySize: "52mb",
    serverActions: {
      bodySizeLimit: "52mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

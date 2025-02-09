import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/legal/terms",
      destination: "https://hackmd.io/@SiongSng/Sk0DDYNFyl",
      permanent: false,
    },
    {
      source: "/legal/privacy-policy",
      destination: "https://hackmd.io/@SiongSng/S1ahaYVY1l",
      permanent: false,
    },
  ],
};

export default nextConfig;

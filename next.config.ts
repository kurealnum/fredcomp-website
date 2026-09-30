import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/motts-jam",
        destination:
          "https://www.zeffy.com/en-US/ticketing/2026-motts-jam-youth-moutain-bike",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

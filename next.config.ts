import type { NextConfig } from "next";

const basePath = process.env.BASEPATH || "";

const nextConfig: NextConfig = {
  /* Set the basePath to /nextjs */
  basePath: basePath,

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/signin", // Include the basePath in the destination
        permanent: true,
        locale: false,
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

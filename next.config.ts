import type { NextConfig } from "next";
const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
  /* config options here */
   allowedDevOrigins: ["10.108.15.130"], // delete krna h
};

export default nextConfig;

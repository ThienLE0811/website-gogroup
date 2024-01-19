/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gogroup.vn",
      },
    ],
  },
  output: "standalone",
  reactStrictMode: false,
};

export default nextConfig;

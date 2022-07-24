/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "carpick",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/admin": { page: "/admin" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "carpick",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/admin": { page: "/admin" },
    "/terms": { page: "/terms" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;

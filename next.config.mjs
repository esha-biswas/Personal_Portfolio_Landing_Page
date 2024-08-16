/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  //  basePath: "/Personal_Portfolio_Landing_Page",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};



export default nextConfig;

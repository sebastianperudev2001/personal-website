/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config) => {
    config.externals = config.externals || [];
    config.externals.push({
      "minimalist-engineer-shrug": "commonjs minimalist-engineer-shrug",
    });
    return config;
  },
};

export default nextConfig;

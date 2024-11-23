module.exports = {
  reactStrictMode: true,
  webpack(config: any, { isServer }: { isServer: boolean }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
      };
    }
    return config;
  },
};
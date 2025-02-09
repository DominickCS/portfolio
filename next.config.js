module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource', // Webpack 5 built-in loader
    });

    return config;
  },
};


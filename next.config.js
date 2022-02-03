const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: { path: path.resolve(__dirname, 'static'), },
  webpack: ( config, options ) => {
    config.module.rules.push({
      test: /\.pdf/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext]',
      },
    })
    return config 
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({});
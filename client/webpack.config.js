const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ...existing configuration...
  plugins: [
    // ...existing plugins...
    new BundleAnalyzerPlugin(),``
  ],
};
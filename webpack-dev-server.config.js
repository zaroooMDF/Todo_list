const makeWebpackConfig = require('./make-webpack-config');

const config = makeWebpackConfig({
  devServer: true,
  devtool: 'inline-source-map',
  debug: true,
  env: 'dev',
});

module.exports = config;

// Karma configuration
// Generated on Thu Jun 28 2018 19:11:18 GMT+0300 (EEST)

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [{
      pattern: 'test-context.js',
      watched: false,
    }],
    exclude: [
    ],
    preprocessors: {
      'test-context.js': ['webpack'],
    },
    webpack: {
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                outputStyle: 'expanded',
                sourceMapContents: true,
              },
            },
          ],
        }],
      },
      mode: 'development',
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
    reporters: ['verbose', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      'type': 'html',
      'dir': 'coverage/',
    },
  });
};

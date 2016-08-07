/* eslint-env node */
// Karma configuration

var path = require('path');
module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      'test/**/*-test.js'
    ],

    preprocessors: {
      'test/**/*-test.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            include: [
              path.resolve('app'),
              path.resolve('test')
            ],
            loader: 'babel'
          },
          {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/!html'
          }, {
            test: /\.css$/,
            loader: 'style!css'
          }
        ]
      },
      babel: {
        presets: ['es2015']
      }
    },
    webpackMiddleware: {
      noInfo: true
    },

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};

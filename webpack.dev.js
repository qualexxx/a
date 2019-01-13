const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    'web/html5-youtube': './src/web.ts',
    'test': './src/Html5YouTube.test.ts',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', // Enable sourcemaps for debugging webpack's output.
  devServer: {
    contentBase: './dist',
    port: 9000
  }
})

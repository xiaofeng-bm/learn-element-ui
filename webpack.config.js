const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://vue-loader.vuejs.org/zh/guide/#vue-cli
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    app: [
      './examples/main.js'
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '测试',
      template: path.resolve(__dirname, './examples/index.html')
    }),
    new VueLoaderPlugin()
  ],
  // 别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
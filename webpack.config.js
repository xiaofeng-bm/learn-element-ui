const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://vue-loader.vuejs.org/zh/guide/#vue-cli
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // 入口文件
  entry: {
    app: [
      './examples/main.js'
    ]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 开启source-map 
  devtool: 'source-map',
  devServer: {
    port: 8081,
    // 告诉服务器从哪个目录中提供内容
    contentBase: path.resolve(__dirname, './dist'),
    // dev-server启动后自动打开浏览器
    open: true
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理scss文件
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',        
            options: {
              sourceMap: true             // sass开启sourceMap
            }
          }
        ]
      }
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
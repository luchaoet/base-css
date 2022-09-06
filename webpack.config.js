const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离css的插件

module.exports = {
  mode: 'development', // production
  entry: './src/scss/index.scss',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    })
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(woff|woff2?|svg|ttf|eot)$/,
        use: [
          { loader: 'file-loader', options: { outputPath: 'iconfont' } }
        ]
      }
    ]
  }
}
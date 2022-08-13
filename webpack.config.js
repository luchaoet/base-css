const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离css的插件

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    })
  ],
  //loader链
  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: "resolve-url-loader"  //因为scss-loader没有重写url的功能，所以必须安装这个
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
            options: { sourceMap: true }  //必须要写
          }
        ]
      },
      //如果没有字体图标文件，就不需要这个file-loader
      {
        test: /\.(woff|woff2?|svg|ttf|eot)$/,
        use: [
          { loader: 'file-loader', options: { outputPath: 'iconfont' } }//项目设置打包到dist下的fonts文件夹下
        ]
      }
    ]
  }
}
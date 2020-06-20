const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离css的插件

// development production
module.exports = {
  mode: 'production',  //生产模式，会压缩代码，development不会压缩代码
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist') //打包后的出口
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",  //打包后的css文件
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
        use:[
             {loader:'file-loader',options:{outputPath: 'iconfont'}}//项目设置打包到dist下的fonts文件夹下
          ]
      }
    ]
  }
}
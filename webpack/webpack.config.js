const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  VueLoaderPlugin
} = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  mode: "production",
  // 出口
  output: {
    // 打包后的文件名
    /* 
    如果图片较小，则每必要发起http请求，直接转成data url base64字符串
    如果图片较大，则字符串也会很长，会使网页请求变慢，所以使用文件路径的方式引用
    */
    filename: 'js/app.js',
    // 打包后的文件夹路径
    // __dirname  代表当前文件夹
    path: path.resolve(__dirname, 'dist'),
  },
  // 模块
  module: {
    // 规则
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        // 正则
        test: /\.(png|jpg|gif)$/,
        // 但与上面匹配时，使用下面的加载器处理
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240, //限制图片大小为20k，如果小于此，则转成dataurl
            name: 'imgs/[name]-[hash].[ext]' //如果大于20k ，则正常拷贝图片
          }
        }]
      },
      {
        // 正则
        test: /\.css$/,
        // 但与上面匹配时，使用下面的加载器处理
        use: ["vue-style-loader", 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "sass-loader" // 将 Sass 编译成 CSS
        ] //从后往前走
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  // 用到的插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // title: "Azrael",
      template: "./public/index.html"
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
          from: "public/js/vue.js",
          to: "js/vue.js"
        },

      ],
    }),

  ],
  // 解析
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "~a": path.resolve(__dirname, 'src/assets'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  // 排除某些包不参与打包
  externals: {
    jquery: 'jQuery',
    vue: "Vue"
  }
};
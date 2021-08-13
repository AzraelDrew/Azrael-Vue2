const path = require('path');

module.exports = {
  // 模块
  module: {
    // 规则
    rules: [{
      // 正则
      test: /\.(png|jpg|gif)$/,
      // 但与上面匹配时，使用下面的加载器处理
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10240, //限制图片大小为20k，如果小于此，则转成dataurl
          name: '[name]-[hash].[ext]' //如果大于20k ，则正常拷贝图片
        }
      }]
    }, ]
  },
  mode: "production",
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包后的文件名
    /* 
    如果图片较小，则每必要发起http请求，直接转成data url base64字符串
    如果图片较大，则字符串也会很长，会使网页请求变慢，所以使用文件路径的方式引用
    */
    filename: 'app.js',
    // 打包后的文件夹路径
    // __dirname  代表当前文件夹
    path: path.resolve(__dirname, 'dist'),
  },
};
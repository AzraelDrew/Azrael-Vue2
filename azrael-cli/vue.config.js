const path = require('path') //node中管理文件路径相关的模块
module.exports = {
  lintOnSave: "warning", //保存代码时，eslint仅警告不报错
  // plugins: [
  //   // 使用new htmlWebpackPlugin会覆盖调Vue中默认的htmlWebpackPlugin
  //   // new htmlWebpackPlugin()
  // ]

  // 链式操作webpack，在默认配置上进行修改

  chainWebpack: config => {
    // 配置插件
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Azrael App-" + process.env.NODE_ENV
        return args;
      });
    // 配置resolve
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("~com", path.resolve(__dirname, "src", "components"))
    config.externals({
      vue: "Vue",
      "vue-router": "VueRouter"
    })
  },
  devServer: {
    port: 9999,
    open: true,
  }
}
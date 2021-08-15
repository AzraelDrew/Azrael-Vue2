module.exports = {
  // plugins: [
  //   // 使用new htmlWebpackPlugin会覆盖调Vue中默认的htmlWebpackPlugin
  //   // new htmlWebpackPlugin()
  // ]

  // 链式操作webpack，在默认配置上进行修改

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        console.log(args);
        // return []
        args[0].title = "Azrael App"
        return args;
      })
  }
}
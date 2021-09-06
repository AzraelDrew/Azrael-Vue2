import * as kebabCase from "lodash/kebabCase";
export default Vue => {
  // Vue.component("zz", {
  //   // template: `<div>11111</div>`//  脚手架中不能使用template
  // })

  // 卡亚通过本方法导入文件夹中打文件
  // require.context(filepath,dir,reg)  第一个是参数文件夹路径   第二个参数是否包含子目录   第三个参数是正则表达式
  let context = require.context('./components', true, /\.vue$/);
  context.keys().forEach(filePath => {
    let comName = filePath.replace(/\.\/(.+)\.vue$/, "$1")
    // 处理子母录中打组件名  zzz/zz/xxxx/vvv =>  得到vvv
    if (comName.includes('/')) {
      let arr = comName.split('/')
      comName = arr[arr.length - 1]
    }
    Vue.component("sb-" + kebabCase(comName), context(filePath).default)
    // Vue.component("sb-" + comName.toLocaleLowerCase(), context(filePath).default)
  })


  // Vue.component("sb-tip", Tip);
  // Vue.component("sb-button", Button)
  // Vue.component("sb-center", Center)
  console.log("全局组件已经部署...")

}
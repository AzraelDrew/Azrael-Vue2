// import Tip from './components/Tip';
// export default Vue => {
//   Vue.component("al-tip", Tip)
//   console.log("全局组件");
// }

import * as kebabCase from "lodash/kebabCase";

export default Vue => {
  let context = require.context("./components", true, /\.vue$/)

  context.keys().forEach(filePath => {
    let comName = filePath.replace(/\.\/(.+)\.vue$/, "$1")
    if (comName.includes("/")) {
      let arr = comName.split("/")
      comName = arr[arr.length - 1]
    }
    Vue.component("al-" + kebabCase(comName), context(filePath).default)
  })
  console.log("全局组件")
}
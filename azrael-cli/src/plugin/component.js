import * as kebabCase from "lodash/kebabCase"

export default Vue => {
  let context = require.context("./components", true, /\.vue$/);
  context.keys().forEach(filePath => {
    let ComName = filePath.replace(/\.\/(.+)\.vue$/, "$1")
    // console.log(context(filePath));

    // console.log(ComName);
    if (ComName.includes('/')) {
      let arr = ComName.split('/')
      ComName = arr[arr.length - 1]
    }
    Vue.component("al-" + kebabCase(ComName), context(filePath).default);
  })

}
import Tip from "./Tip"
export default Vue => {
  // Vue.component("zz", {
  //   // template: `<div>11111</div>`//  脚手架中不能使用template
  // })
  Vue.component("sb-tip", Tip)
  console.log("全局组件已经部署...")
}
// export default Vue => {
//   Vue.directive('red', (el) => {
//     el.style.color = "red"
//   })
//   console.log("全局指令");
// }

const directives = {
  red(el) {
    el.style.color = "red"
  },
  yellow(el) {
    el.style.color = "yellow"
  }
}
export default Vue => {
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
}
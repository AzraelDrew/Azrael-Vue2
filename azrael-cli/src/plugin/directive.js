let directives = {
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
  console.log("全局指令");

}
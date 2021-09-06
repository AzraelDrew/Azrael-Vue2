/* 
×指令注册中心
*/
const directives = {
  red(el) {
    el.style.color = 'red'
  },
  yellow(el) {
    el.style.color = 'yellow'
  }
}

export default Vue => {
  // Vue.directive("red", (el) => {
  //     el.style.color = "red"
  //   }

  // )
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
  console.log("自定义指令已经部署指令...")
}
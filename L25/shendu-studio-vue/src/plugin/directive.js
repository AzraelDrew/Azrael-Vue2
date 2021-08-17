export default Vue => {
  Vue.directive("red", (el) => {
      el.style.color = "red"
    }

  )
  console.log("自定义指令已经部署指令...")
}
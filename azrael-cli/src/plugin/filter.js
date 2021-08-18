let filters = {
  fmtGender(val) {

    return ["男", "女"][val] || "未知"
  },
  fmtTime(val) {

    return `${val}:` + new Date().toLocaleDateString()
  }
}

export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
  console.log("全局过滤器");

}
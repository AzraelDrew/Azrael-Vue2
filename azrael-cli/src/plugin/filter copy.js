// export default Vue => {
//   Vue.filter("fmtGender", (val) => {
//     return ["男", "女"][val] || "未知"
//   })
//   console.log("全局过滤器");
// }

const filters = {
  fmtGender(val) {
    return ['男', '女'][val] || "未知"
  },
  fmtTime(val) {
    return "2021-08-18";
  }
}
export default Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
export default Vue => {
  Vue.filter("fmtGender", val => {
    return ['男', '女'][val] || "未知"
  })
  console.log("全局过滤器已经部署...")
}
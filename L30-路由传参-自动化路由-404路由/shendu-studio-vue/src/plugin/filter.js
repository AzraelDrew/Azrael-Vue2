/* 
 *过滤器注册中心，肉感需要新增全局过滤器，只要按下马的格式去添加即可
 */

const filters = {
  fmtTime(val) {
    return `2020-10-10,${val}`
  },
  fmtGender(val) {
    return ['男', '女'][val] || "未知"
  }
}
export default Vue => {
  Vue.filter("fmtGender", val => {
    return ['男', '女'][val] || "未知"
  })
  // console.log(Object.keys(filters)); //返回所有的key

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

  // for (const key in filters) {
  //   Vue.filter(key, filters[key])
  // }
  console.log("全局过滤器已经部署...")
}
export default (Vue) => {
  Vue.mixin({
    data() {
      return {
        BASE_URL: "http://simbajs.com"
      }
    }
  })
  console.log("全局混入已经部署...")
}
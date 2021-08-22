import {
  $get,
  $post
} from "./utils/request"

// import "nprogress/nprogress.js"
export default (Vue) => {
  Vue.mixin({
    data() {
      return {}
    },
    methods: {
      $get,
      $post
    }
  })
  console.log("全局混入已经部署...")
}
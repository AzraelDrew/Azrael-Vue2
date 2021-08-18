import {
  $get,
  $post
} from "./utils/request";
export default Vue => {
  Vue.mixin({
    data() {
      return {
        name: "azrael"
      }
    },
    methods: {
      $get,
      $post
    }
  })
  console.log("全局混入");
}
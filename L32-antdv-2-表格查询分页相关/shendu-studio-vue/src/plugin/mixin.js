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
      $post,
      __msg__(type = "success", message, description) {
        this.$notification[type]({
          message,
          description,
          duration: 2
        });
      },
      $ms(message = "操作成功", description = "稍后为您呈现...", ) {
        this.__msg__("success", message, description)
      },
      $me(message = "操作失败", description = "请刷新页面后重试", ) {
        this.__msg__("error", message, description)
      },
      $mw(message, description) {
        this.__msg__("warning", message, description)
      },
      $mi(message, description) {
        this.__msg__("info", message, description)
      },
      $mc(handleOk, title = '确定删除此项吗?', content = '删除后无法恢复,请谨慎操作!', ) {
        // this.$confirm({
        //   title,
        //   content,
        //   okText: "确定",
        //   cancelText: "取消",
        //   onOk: () => {
        //     handleOk()
        //   },
        //   onCancel() {},
        // });
        return new Promise((reslove, reject) => {
          this.$confirm({
            title,
            content,
            duration: 2,
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
              reslove()
            },
            onCancel() {
              // reject()
            },
          });
        })
      },

    }
  })
  console.log("全局混入已经部署...")
}
let AzraelRouter = {
  install(Vue) {
    this.installComponents(Vue)
  },
  installComponents(Vue) {
    // 用于页面跳转，点击时，修改地址栏的锚点链接
    Vue.component("sb-link", {
      // props: ['to'],
      props: {
        tag: {
          type: String,
          default: "a"
        },
        to: {
          type: String,
          required: true,
        }
      },
      render(createElement) {
        let attrs = {};
        if (this.tag === "a") {
          attrs.href = "javascript:;"
        }
        return createElement(this.tag, {
          attrs,
          on: {
            click: this.setPath
          }
        }, this.$slots.default) //vnode   this.$slots.default相当于默认插槽
      },
      methods: {
        setPath() {
          // 点击链接是，修改浏览器地址栏中的路径，加上锚链接
          // 因为锚链接不会跳转页面，又可以#后面的值来区分到底是那个页面
          location.href = location.origin + location.pathname + "#" + this.to;
        }
      }
    })

    //用于渲染页面的容器，根据地址栏的锚链接名称来设置当前的组件 
    Vue.component('sb-view', {
      render(h) {
        return h(this.component, {
          'class': {
            red: true
          }
        })
      },
      data() {
        return {
          component: null
        }
      },
      methods: {
        renderRouter() {
          let path = location.hash.replace("#", "")
          // 根据path获取对应路由对象
          let route = routes.find(r => r.path === path)
          // 根据路由对象获取组件
          // console.log(route.component);
          this.component = route.component;
        }
      },
      mounted() {
        // 监听地址栏的变化，取得#后的值，来更新path
        window.onhashchange = e => {
          this.renderRouter()
        }
        this.renderRouter()
      },
    })
  },
}

if (window.Vue) {
  Vue.use(AzraelRouter)
}
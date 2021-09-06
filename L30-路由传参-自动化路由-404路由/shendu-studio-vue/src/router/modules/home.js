export default {
  path: "/", // 代表根路径   www.jd.com => www.jd.com/
  redirect: "/aaa", //当有人访问/时跳转到/aaa (即默认显示子页面)
  // 路由懒加载(异步路由)
  // component() {
  //   return import("@/views/Home")
  // }
  meta: {
    title: '首页',
    sidebar: true,
    sort: 2
  },
  beforeEnter: (to, from, next) => {
    console.log("beforeEnter");
    next();
  },
  component: () => import("@/views/Home"),
  // children中的路由只能在父级component中的router-view中渲染
  children: [{
      path: "/aaa",
      // redirect: "/ccc",
      redirect: {
        name: "c"
      },
      meta: {
        title: 'AAA'
      },
      component: () => import("@/views/AAA"),
      children: [{
          name: "c",
          path: "/ccc",
          meta: {
            title: 'CCC'
          },
          component: () => import("@/views/CCC")
        },
        {
          path: "/ddd",
          meta: {
            title: 'DDD'
          },
          component: () => import("@/views/DDD")
        }
      ]
    },
    {
      path: "/bbb",
      meta: {
        title: 'BBB'
      },
      component: () => import("@/views/BBB")
    }
  ]
}
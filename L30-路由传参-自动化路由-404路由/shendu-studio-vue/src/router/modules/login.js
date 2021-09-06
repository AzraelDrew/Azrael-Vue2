export default {
  path: "/login",
  meta: {
    title: 'LOGIN',
    sidebar: true,
    sort: 1
  },
  component: () => import("@/views/Login"),
  children: [{
    path: "/detail",
    props: route => ({
      id: route.query.id
    }),
    component: () => import("@/views/Detail")
  }, {

    path: "/edit/:id", //id为形参  科研传多个参数   /鹅地她/:id/:bid
    props: true, //仅适用于params传参
    component: () => import("@/views/Edit")
  }]
}
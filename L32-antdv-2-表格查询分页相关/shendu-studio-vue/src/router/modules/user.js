export default {
  path: "/userlist",
  meta: {
    title: '用户列表',
    sidebar: true,
    sort: 1,
    icon: "user"
  },
  component: () => import("@/views/UserList"),

}
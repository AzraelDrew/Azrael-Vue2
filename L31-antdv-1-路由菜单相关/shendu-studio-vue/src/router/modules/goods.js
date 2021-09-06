export default {
  path: "/goodlist",
  meta: {
    title: '商品列表',
    sidebar: true,
    sort: 2,
    icon: "video-camera"
  },
  component: () => import("@/views/GoodsList"),
}
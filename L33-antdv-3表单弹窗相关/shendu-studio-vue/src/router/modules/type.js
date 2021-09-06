export default {
  path: "/good2list",
  meta: {
    title: '分类列表',
    sidebar: true,
    sort: 3,
    icon: "video-camera"
  },
  component: () => import("@/views/GoodsTypeList"),
}
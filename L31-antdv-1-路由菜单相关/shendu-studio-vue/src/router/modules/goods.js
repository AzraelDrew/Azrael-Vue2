export default {
  path: "/goodlist",
  meta: {
    title: 'ๅๅๅ่กจ',
    sidebar: true,
    sort: 2,
    icon: "video-camera"
  },
  component: () => import("@/views/GoodsList"),
}
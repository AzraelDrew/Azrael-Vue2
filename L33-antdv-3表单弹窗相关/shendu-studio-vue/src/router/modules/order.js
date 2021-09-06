export default {
  path: "/orderlist",
  meta: {
    title: '订单列表',
    sidebar: true,
    sort: 4,
    icon: "upload"
  },
  component: () => import("@/views/OrderList"),
}
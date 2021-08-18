import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import Login from '@/views/Login'
const router = new VueRouter({
  // 路径
  routes: [{
    path: "/", // 代表根路径   www.jd.com => www.jd.com/
    // 路由懒加载(异步路由)
    // component() {
    //   return import("@/views/Home")
    // }
    component: () => import("@/views/Home")
  }, {
    path: "/login",
    component: Login
  }]
})

export default router
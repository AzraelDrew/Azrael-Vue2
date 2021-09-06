/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import routes from "./routes"
Vue.use(VueRouter)
// import Home from '@/views/Home'
// import Login from '@/views/Login'
const router = new VueRouter({
  // 路径
  routes
})

// 路由跳转前一定会走这里
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  document.title = to.meta.title + " | " + "Azrael"
  // console.log("beforeEach");
  NProgress.start();
  next(); //必须调用next()才能跳转(放行)
  // setTimeout(() => {
  //   next();
  // }, 1000) //一秒后跳转
})

// 在afterEach之前走
router.beforeResolve((to, from, next) => {
  // console.log("beforeResolve");
  next();
})

// 路由跳转后一定会走这里
router.afterEach((to, from) => {
  // console.log("afterEach");
  NProgress.done();
})

export default router
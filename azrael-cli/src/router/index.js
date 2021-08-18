import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: "/home",
    component: () => import("@/views/Home")
  }, {
    path: "/login",
    component: () => import("@/views/Login")
  }]
})
export default router;
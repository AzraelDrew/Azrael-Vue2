import Vue from 'vue'
import App from './App.vue'
import "@/assets/azrael.css"
import plugin from './plugin'
Vue.use(plugin, {
  silent: process.env.NODE_ENV !== 'development' //静默模式  禁用打印
})
Vue.config.productionTip = false

import router from './router/index'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
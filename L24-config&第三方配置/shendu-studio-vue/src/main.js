import Vue from 'vue'
import App from './App' //导入组件
import "@/assets/azrael.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
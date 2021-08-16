import Vue from 'vue'
import App from './App' //导入组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import '@/assets/azrael.css'
Vue.config.productionTip = false

//plugin里面的所有方法都是全局的
import plugin from './plugin' //可以在任何文件中使用
Vue.use(plugin, {
  silent: process.env.NODE_ENV !== 'development', //开启静默模式   只有在开发版时才打印
  // silent: true
})

/* 
当使用plugin时会去导入plugin下的index.js

然后会导入mixin filter directive vue-extend 以及components下的index.json

最后导入components下的所有文件

*/
import App from './App' //导入组件
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
import Vue from "vue" //会将第三方的包合并到我们打包的文件中
import Home from "./components/Home"
import App from './App.vue'

new Vue({
  el: "#app",
  // template: "<div id='app'>Azrael App</div>",
  render(h) {
    return h(App)
  },
  data() {
    return {
      age: 1
    }
  },
  created() {
    console.log("App", this.age);
  }

})
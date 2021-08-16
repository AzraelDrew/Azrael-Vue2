<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Azrael" />
    <Demo />
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "axios"
  import HelloWorld from './components/HelloWorld.vue'
  import Demo from './components/Demo.vue'

  export default {
    name: 'App',
    data() {
      return {
        list: []
      }
    },
    created() {
      //本地的json文件必须行在public中(静态的资源都放在public中)
      axios.get("/json/a.json").then(res => {
        // console.log(res);
        this.list = res.data;
      })
    },
    components: {
      HelloWorld,
      Demo
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <al-tip v-red>Alex</al-tip>
    <al-center>居中</al-center>
    <al-edit-button>按钮</al-edit-button>
    <h1>
      {{this.$azrael}}
    </h1>
    <h1>
      {{1|fmtGender}}
    </h1>
    <h1>
      {{11|fmtGender}}
    </h1>
    <h1>
      {{str|fmtTime}}
    </h1>
    <i class="fas fa-address-book    "></i>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        str: "日期为"
      }
    },
    components: {},
    created() {
      this.$get("/list").then(res => {
        console.log(res);
      })
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
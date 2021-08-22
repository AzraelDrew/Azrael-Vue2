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

    <br>
    <div class="flex j-c">
      <div style="border:2px solid red;width:20vw;height:40vh">
        <ul>
          <!-- <router-link tag="li" to="/">Azrael</router-link> -->
          <router-link tag="li" to="/">HOME</router-link>
          <router-link tag="li" to="/login">LOGIN</router-link>
        </ul>
      </div>
      <div style="border:2px solid red;width:80vw;height:40vh">
        <router-view></router-view>
      </div>
    </div>
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
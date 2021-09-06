<template>
  <div>
    <!-- 路由传参 -->
    LOGIN
    <button @click="go">跳转</button>
    <div>
      <!-- 使用$route.query来接参数 -->
      <router-link to="/detail?id=111">商品1</router-link>
      <br>
      <router-link to="/detail?id=222">商品2</router-link>
    </div>
    <hr>
    <div>
      <!-- 使用$route.params来接参数 -->
      <router-link to="/edit/111">编辑1</router-link>
      <br>
      <router-link to="/edit/222">编辑2</router-link>
    </div>
    <fieldset style="padding:10px">
      <legend>LOGIN的子路由的router-view</legend>
      <router-view></router-view>
    </fieldset>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      // 编程式导航
      go() {
        this.$router.push("/")
      }
    },
    mounted() {
      // console.log(this.$router.options.routes[0].children);
    }
  }
</script>

<style lang='scss'>


</style>
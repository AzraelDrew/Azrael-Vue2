<template>
  <div class="flex">
    <ul style="width:100px;border:2px solid red;height:100vh">
      <router-link tag="li" to="/">首页 </router-link>
      <router-link tag="li" to="/login">登录</router-link>
    </ul>
    <!-- 渲染App的路由 -->
    <fieldset style="padding:10px">
      <legend>App路由的router-view</legend>
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
  }
</script>

<style lang="scss">

</style>
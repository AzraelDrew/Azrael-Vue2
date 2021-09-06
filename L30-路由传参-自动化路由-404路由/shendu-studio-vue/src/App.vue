<template>
  <div class="flex">
    <ul style="width:100px;border:2px solid red;height:100vh">
      <router-link tag="li" :to="route.path" v-for="route in routes" :key="route">
        {{route.meta.title}}
      </router-link>
      <!-- <router-link tag="li" to="/login">登录</router-link> -->
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
    computed: {
      routes() {
        // this.$router  全局配置打router对象
        // this.route  当前这个路由的信息
        console.log(this.$router.options.routes.filter(r => r.meta && r.meta.sidebar));
        return this.$router.options.routes
          .filter(r => r.meta && r.meta.sidebar)
          .sort((a, b) => a.meta.sort - b.meta.sort)
      }
    },

  }
</script>

<style lang="scss">

</style>
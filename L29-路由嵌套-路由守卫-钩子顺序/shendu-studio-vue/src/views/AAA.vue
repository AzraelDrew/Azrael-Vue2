<template>
  <div>
    <router-link to="/ccc">CCC</router-link>
    <router-link to="/ddd">DDD</router-link>
    <!-- 渲染AAA的路由 -->
    <fieldset style="padding:10px">
      <legend>AAA的子路由的router-view</legend>
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
    components: {

    }
  }
</script>

<style lang='scss'>


</style>
<template>
  <div>
    <fieldset style="padding:10px">
      <div>
        <router-link to="/aaa">AAA</router-link>
        <router-link to="/bbb">BBB</router-link>
      </div>
      <legend>HOME</legend>
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
    beforeRouteEnter(to, from, next) {

      next();
    }

  }
</script>

<style lang='scss'>


</style>
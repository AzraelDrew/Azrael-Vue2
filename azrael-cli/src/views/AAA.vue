<template>
  <div>

    <fieldset style="padding:10px">
      <div>
        <router-link to="/ccc">CCC</router-link>
        <router-link to="/ddd">DDD</router-link>
      </div>
      <legend>AAA</legend>
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
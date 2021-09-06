<template>
  <div>
    Detail
    {{id}}
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    // computed: {
    //   id() {
    //     return this.$route.query.id
    //   }
    // },
    props: ["id"],
    created() {
      // console.log(this.$route.query.id);
    },
    watch: {
      $route() {
        console.log(this.$route.query.id);

      }
    },
    // beforeRouteUpdate(to, from, next) {
    //   console.log(this.$route.query.id);
    //   next();
    // }
  }
</script>

<style lang='scss'>
</style>
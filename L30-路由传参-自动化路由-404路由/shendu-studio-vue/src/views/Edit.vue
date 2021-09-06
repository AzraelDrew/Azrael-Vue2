<template>
  <div>
    Edit {{id}}
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
    //     return this.$route.params.id
    //   }
    // }
    props: ["id"]
  }
</script>

<style lang='scss'>


</style>
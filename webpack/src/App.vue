<template>
  <div id="main">
    App{{age}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        age: 10
      }
    }
  }
</script>

<style scoped lang="scss">
  #main {
    color: red;
  }
</style>
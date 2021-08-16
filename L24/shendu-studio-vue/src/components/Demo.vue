<template>
  <div @click="$emit('click')">
    {{age}}
    <button @click="$emit('change',age+1)">click</button>
  </div>
</template>

<script>
  export default {
    props: {
      age: {
        type: Number,
      }
    },
    data() {
      return {

      }
    },
    components: {

    },
    methods: {},

  }
</script>

<style lang='scss'>


</style>
<template>
  <h1>
    Hello:{{age}}-{{ageP}}
  </h1>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {
        age: 10
      }
    },
    methods: {},
    computed: {
      ageP() {
        // console.log(this);
        return this.age + 10;
      }
    }
  }
</script>

<style>

</style>
<template>
  <div>
    <!-- 组件不是标签不能绑定@click 
    使用.native
    也可以在子组件中使用$emit
    -->
    <!-- <Demo :age="age1" @click.native="test" />
    <Demo :age="age1" @click1="test" /> -->
    <Demo :age="age1" @change="changeVal($event)" />
    <Demo :age="age2" @change="changeVal2" />
  </div>
</template>

<script>
  import Demo from "./components/Demo.vue"
  export default {
    data() {
      return {
        age1: 20,
        age2: 30
      }
    },
    components: {
      Demo
    },
    methods: {
      test() {
        console.log("hhhhhhhhhh");
      },
      changeVal(e, data) {
        this.age1 = e
        console.log(data);
      },
      changeVal2(e) {
        this.age2 = e
      }
    }
  }
</script>

<style lang='scss'>


</style>
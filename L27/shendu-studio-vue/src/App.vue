<template>
  <div>
    <!-- 组件不是标签不能绑定@click 
    使用.native
    也可以在子组件中使用$emit
    -->
    <!-- <Demo :age="age1" @click.native="test" />
    <Demo :age="age1" @click1="test" /> -->
    <h1>
      {{myTitle}}
    </h1>
    <sb-tip>dasdf</sb-tip>
    <sb-tip color="red">dasdf</sb-tip>
    <sb-edit-button>测试</sb-edit-button>
    <sb-center>测试</sb-center>
    <h1 v-red>{{1 | fmtTime}}</h1>
    <h1 v-yellow>{{1 | fmtGender}}</h1>
    <h1>{{12 | fmtGender}}</h1>
    <Demo :age="age1" @change="changeVal" />
    <Demo :age="age2" @change="changeVal2" />

  </div>
</template>

<script>
  import Demo from "~com/Demo.vue"
  // import qs from "qs"




  // console.log({
  //   a: 1,
  //   b: 2
  // });
  // console.log(qs.stringify({
  //   a: 1,
  //   b: 2
  // }));
  export default {
    data() {
      return {
        age1: 20,
        age2: 30,
        myTitle: process.env.VUE_APP_TITLE, //当前环境对应的配置文件中的VUE_APP_TITLE属性值

      }
    },
    components: {
      Demo,

    },

    created() {
      console.log(this.$azrael);
      this.$get("/list", {
        a: 1,
        b: 3
      }).then(res => {
        console.log(res.data);
      })
      // this.$post("/list", {
      //   aa: 1,
      //   bb: 3
      // }).then(res => {
      //   console.log(res.data);
      // })
    },
    methods: {
      test() {
        console.log("hhhhhhhhhh");
      },
      changeVal(e) {
        this.age1 = e
      },
      changeVal2(e) {
        this.age2 = e
      }
    },
  }
</script>

<style lang="scss">

</style>
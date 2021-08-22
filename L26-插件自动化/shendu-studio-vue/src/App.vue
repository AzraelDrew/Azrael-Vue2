<template>
  <div>
    <!-- 组件不是标签不能绑定@click 
    使用.native
    也可以在子组件中使用$emit
    -->
    <!-- <Demo :age="age1" @click.native="test" />
    <Demo :age="age1" @click1="test" /> -->
    <sb-tip>dasdf</sb-tip>
    <sb-tip color="red">dasdf</sb-tip>
    <sb-edit-button>测试</sb-edit-button>
    <sb-center>测试</sb-center>
    <h1 v-red>{{BASE_URL}}</h1>
    <h1 v-yellow>{{BASE_URL}}</h1>
    <h1>{{1 | fmtTime}}</h1>
    <h1>{{1 | fmtGender}}</h1>
    <h1>{{12 | fmtGender}}</h1>
    <Demo :age="age1" @change="changeVal" />
    <Demo :age="age2" @change="changeVal2" />
    <i class="fas fa-address-book    "></i>

    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import Demo from "~com/Demo.vue"
  // import qs from "qs"

  import {
    Swiper,
    SwiperSlide,
    directive
  } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  // import 'swiper/swiper-bundle.css'


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
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true,
          autoplay: true,
          // Some Swiper option/callback...
        }
      }
    },
    components: {
      Demo,
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    created() {
      console.log(this.$azrael);
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
  .swiper-container {
    width: 600px;
    height: 300px;
    border: 2px solid black;
  }

  .swiper-container {
    .swiper-pagination-bullet {
      border-radius: 0;
      height: 4px;
      width: 20px;

      &.swiper-pagination-bullet-active {
        background: red;
      }
    }

  }
</style>
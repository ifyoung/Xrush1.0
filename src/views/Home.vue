<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><slide_page1 /></swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import slide_page1 from "@/components/slide_pages/slide_page1";
export default {
  name: "home",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        height: window.innerHeight,
        loop: true,
        touchRatio: 0.5,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        mousewheel: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    slide_page1
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {}
};
</script>

<style lang="scss">
.home,
.swiper-container {
  height: 100%;
}
</style>

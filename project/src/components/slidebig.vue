<template>
  <article>
    <p class="slide-text">
      {{ text }}
    </p>
    <swiper
      loop="true"
      :slides-per-view="7"
      :space-between="200"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="text in slideList" :key="text">
        <img class="slideimg" v-bind:src="img" />
      </swiper-slide>
    </swiper>
  </article>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

export default {
  name: "slidebig",
  data() {
    return {
      slideList: [{}, {}, {}, {}, {}, {}, {}],
    };
  },
  props: {
    text: String,
    img: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
<style scoped>
article {
  margin-left: 50px;
}
.slide-text {
  text-align: left;
  font-size: 1.25rem;
  font-weight: 700;
}
.slideimg {
  width: 250px;
  height: 450px;
  border-radius: 5px;
}
</style>

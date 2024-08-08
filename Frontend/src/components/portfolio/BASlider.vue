<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img src="../../assets/premium.png" class="side_img" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/slide.jpg" class="side_img" alt="">
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default  {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}
</style>
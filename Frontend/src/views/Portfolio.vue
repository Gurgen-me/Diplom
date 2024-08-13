<template>
  <Slideportfolio/>
  <template v-for="(portfolio, index) in allPortfolios" :key="index">
    <Portfolios :portfolio="portfolio" @click="portfolio.isOpen = true" />
      <Modal :isOpen="portfolio.isOpen" v-if=" portfolio.isOpen" @click="portfolio.isOpen = false">
        <MDBCard>
          <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>до<img :src="portfolio.before" class="services_img" alt="Фотография услуги"></swiper-slide>
            <swiper-slide>после<img :src="portfolio.after" class="services_img" alt="Фотография услуги"></swiper-slide>
          </swiper>
          <MDBCardBody>
            <p>{{portfolio.title}}</p>
            <p>{{portfolio.details}}</p>
          </MDBCardBody>
          <p class="pri">{{portfolio.price}} ₽ </p>
        </MDBCard>
      </Modal>
  </template>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Slideportfolio from "../components/portfolio/Slideportfolio.vue";
import Modal from "../components/modal/Modal.vue";
import Portfolios from "../components/portfolio/Portfolios.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default defineComponent({
  name: "Portfolio",
  data: () => ({}),

  components: {
    Slideportfolio, Portfolios, Modal, Swiper, SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  async mounted() {
    await this.$store.dispatch("fetchAllPortfolios");
    console.log(this.$store.state.PortfoliosState.portfolios);

  },
  computed: {
    allPortfolios(): any[] {
      return this.$store.state.PortfoliosState.portfolios;
    }
  },
  methods: {}
})
</script>

<style scoped>
.swiper {
  width: 800px;
  height: 400px;
  border-radius: 25px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 800px;
  height: 400px;
  border-radius: 25px;
  object-fit: cover;
}
.pri{
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
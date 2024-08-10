<template>
  <Slideportfolio/>
  <template v-for="(portfolio, index) in allPortfolios" :key="index">
    <Portfolios :portfolio="portfolio" @click="portfolio.isOpen = true" />
      <Modal :isOpen="portfolio.isOpen" v-if=" portfolio.isOpen" @click="portfolio.isOpen = false">
        <MDBCard>
          <img :src="portfolio.before" class="services_img" alt="Фотография услуги">
          <img :src="portfolio.after" class="services_img" alt="Фотография услуги">
          <MDBCardBody>
            <p class="pu">{{portfolio.title}}</p>
            <p class="pu">{{portfolio.details}}</p>
          </MDBCardBody>
          <p class="pu">{{portfolio.price}} ₽ </p>
        </MDBCard>
      </Modal>
  </template>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Slideportfolio from "../components/portfolio/Slideportfolio.vue";
import Modal from "../components/modal/Modal.vue";
import Portfolios from "../components/portfolio/Portfolios.vue";

export default defineComponent({
  name: "Portfolio",
  data: () => ({}),

  components: {
    Slideportfolio, Portfolios, Modal,
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

</style>
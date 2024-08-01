<template>
  <Slide />
  <h1 class="text-center">Наши услуги</h1>
  <div class="price">
    <template v-for="(service, index) in allServices" :key="index">
      <Services :service="service" />
    </template>
  </div>
</template>

<script lang="ts">

import Slide from '../components/home/Slide.vue'
import Services from '../components/home/Services.vue'
import { defineComponent } from 'vue';

export default  defineComponent({
  name: "Home",
  components: {
    Slide, Services
  },
  async mounted() {
    await this.$store.dispatch("fetchAllServices");
    console.log(this.$store.state.ServicesState.services);
    
  },
  computed: {
    allServices(): any[] {
      return this.$store.state.ServicesState.services;
    }
  }
});
</script>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
.price {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
}
</style>
<template>
  <Slide />
  <h1 class="text-center">Наши услуги</h1>
  <div class="price">
    <Services />
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
});
</script>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
</style>
<template>
  <Slide />
  <h1 class="text-center">Наши услуги</h1>
  <div class="price">
    <Services />
  </div>
</template>

<script setup lang="ts">

import Slide from '../components/home/Slide.vue'
import Services from '../components/home/Services.vue'

</script>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
</style>
<template>
 <Slide/>
 <h1 class="text-center">Наши услуги</h1>
 <div class="price">
  <Services/>  
  <Services/>  
  <Services/>  
  <Services/>  
  <Services/>  
  <Services/>  
  <Services/>  
  <Services/>  
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
.price{
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 0.01fr);
      grid-gap: 10px;

}

</style>
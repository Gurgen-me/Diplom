<template>
    <div class="p-5 text-center bg-image" id="slide_portfolio">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
        <div class="d-flex justify-content-md-center align-items-center h-100">
          <div class="text-white">
            <h1>Наши работы</h1>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  console.log("Slide component big img loaded");
  </script>
  
  <style scoped>
#slide_portfolio {
  height: 500px;
  max-width: 1600px;
  background-image: url(../../assets/slide.jpg);
}
  </style>
<template>
  <div class="p-5 text-center bg-image" id="slide">
    <!-- <img src="../../assets/slide.jpg" alt="" srcset=""> -->
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="d-flex justify-content-md-start align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Детейлинг центр</h1>
          <h1 class="mb-3">в Краснодаре GM</h1>
          <h4 class="mb-3">Для тех, кто ценит свой автомобиль!</h4>
          <h4 class="mb-3">КРАСНОДАР - район Катюши / Ипподрома</h4>
          <h4 class="mb-3">Бронировка авто пленкой/ Ипподрома</h4>
          <MDBBtn class="sign_up" outline="light"  role="button">
            <a href="https://w1197953.yclients.com">Записаться</a>
          </MDBBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MDBBtn } from 'mdb-vue-ui-kit';

console.log("Slide component loaded");
</script>

<style scoped>
#slide {
  margin: 0;
  padding: 0;
  height: 500px;
  max-width: 1600px;
  background-image: url(../../assets/slide.jpg);
}
.bg-image {
  background-size: cover;
  background-position: center;
}
.sign_up {
  border-color: #ce9701;
}
.sign_up:hover {
  background: #ce9701;
  border-color: #ce9701;
}
</style>
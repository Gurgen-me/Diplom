<template>
  <div class="p-5 text-center bg-image" id="slide">
    <!-- <img src="../../assets/slide.jpg" alt="" srcset=""> -->
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="d-flex justify-content-md-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Ошибка 404 <b><router-link to="/" class="booking">Вернуться на главную страничку</router-link></b></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


export default {
  name: 'ff404',

}
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
.booking{
  color: rgb(255, 0, 0);
}
</style>
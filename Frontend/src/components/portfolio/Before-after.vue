<template>
  <!-- Button trigger modal -->
  <div class="all_work">
    <div class="work">
      <img src="../../assets/premium.png" class="work_img" alt="">
    </div>
    <div class="work" >
      <img src="../../assets/premium.png" class="work_img" alt="">
    </div>
  </div>

 </template>

<script setup lang="ts">



</script>

<style>
.all_work {
  display: flex;
  padding: 25px;
  width: 100%;
  height: 100%;
}

.work {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 5px;
  width: 300px;
  height: 200px;
}

.work:hover {
  transform: scale(1.05);
  transition: all .3s;
}

.work_img {
  border-radius: 15px;
  width: 300px;
  height: 200px;
}

.swiper {
  width: 100%;
  height: 100%;
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
  width: 500px;
  height: 300px;
  object-fit: cover;
}
.side_img{
  width: 500px;
  height: 300px;
}
</style>
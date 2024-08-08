<template>
  <!-- Button trigger modal -->
  <div class="all_work">
    <div class="work" @click="staticBackdrop = true" >
      <img src="../../assets/premium.png" class="work_img" alt="">
    </div>
    <div class="work" @click="staticBackdrop = true" >
      <img src="../../assets/premium.png" class="work_img" alt="">
    </div>
  </div>
  <!-- Modal -->
  <MDBModal
      id="staticBackdrop"
      tabindex="-1"
      labelledby="staticBackdropLabel"
      v-model="staticBackdrop"
      staticBackdrop
  >
    <MDBModalHeader>
      <MDBModalTitle id="staticBackdropLabel">  sgregerg  </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
<BASlider />
    </MDBModalBody>
    <MDBModalFooter>

      <MDBBtn color="secondary"> 10000 ₽ </MDBBtn>
    </MDBModalFooter>
  </MDBModal>
</template>

<script setup lang="ts">
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

import BASlider from "./BASlider.vue";

const staticBackdrop = ref(false);

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
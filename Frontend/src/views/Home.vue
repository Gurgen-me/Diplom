<template>
  <Slide />
  <h1 class="text-center">Наши услуги</h1>
  <div class="price">
    <template v-for="(service, index) in allServices" :key="index">
      <Services :service="service" @click="service.isOpen = true" />
      <Modal :isOpen="service.isOpen" v-if=" service.isOpen" @click="service.isOpen = false">
        <MDBCard>
          <img :src="service.photo" class="services_img" alt="Фотография услуги">
          <MDBCardBody>
            <p>{{service.title}}</p>
            <p> <h5>Описание:</h5>
              {{service.details}}
            </p>
          </MDBCardBody>
          <p class="pri">{{service.price}} ₽ </p>
        </MDBCard>
      </Modal>
    </template>
  </div>

</template>

<script lang="ts">

import Slide from '../components/home/Slide.vue'
import Services from '../components/home/Services.vue'
import { defineComponent } from 'vue';
import Modal from "../components/modal/Modal.vue";
import {MDBCard, MDBCardBody} from "mdb-vue-ui-kit";

export default  defineComponent({
  name: "Home",
  components: {
    Slide, Services, Modal
  },
  async mounted() {
    await this.$store.dispatch("fetchAllServices");
    console.log(this.$store.state.ServicesState.services);
    
  },
  computed: {
    allServices(): any[] {
      return this.$store.state.ServicesState.services;
    }
  },
  methods: {

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
.services_img {
  width: 800px;
  height: 400px;
  border-radius: 25px;
}
.pri{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
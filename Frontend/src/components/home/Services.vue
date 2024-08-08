<template>
  <v-container class="bg-surface-variant">
      <v-sheet class="ma-2 pa-2" id="card">
        <MDBCard>
          <img :src="service.photo" class="services_img" alt="Фотография услуги">
          <MDBCardBody>
            <p class="pu">{{service.title}}</p>
          </MDBCardBody>
          <p class="pu">{{service.price}} ₽ </p>
        </MDBCard>
      </v-sheet>
  </v-container>
</template>


<script lang="ts">
import {MDBCard, MDBCardBody} from "mdb-vue-ui-kit";
import {defineComponent} from "vue";
export default defineComponent({
  name: "Services",
  data: () => ({
      show: false,
    }),
  props: {
    service: {
      required: true,
      type: Object
    }
  },
  components: {

  },
})
</script>

<style scoped>
.services_img {
  width: 300px;
  height: 200px;
  border-radius: 15px;
}
#card:hover {
  transform: scale(1.05);
  transition: all .3s;
  border-radius: 15px;
}

.bg-surface-variant {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;

}
#card {
  width: 300px;
  height: 300px;
  margin-top: 5px;
  border-radius: 15px;
}
.info {
  margin-left: 10px;
}

</style>
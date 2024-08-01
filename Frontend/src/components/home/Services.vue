<template>
  <v-container class="bg-surface-variant">
      <v-sheet class="ma-2 pa-2" id="card">
        <MDBCard>
          <img class="services_img" src="../../../public/assets`${service.photo}`" alt="Фотография услуги">
          <MDBCardBody>
            <MDBCardTitle>{{service.title}}</MDBCardTitle>
            <MDBCardText>
              {{service.details}}
            </MDBCardText>
          </MDBCardBody>
          <hr/>
          <p class="pu">{{service.price}}</p>
        </MDBCard>
      </v-sheet>
  </v-container>
</template>

<script lang="ts">
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, mdbRipple} from "mdb-vue-ui-kit";
import {defineComponent} from "vue";
import {SERVISES_INTARFACE} from "../../store/interfaces/SERVISES_INTARFACE";

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
  width: 250px;
  height: 300px;
}

.MDBCard {
  padding: 5px;
  margin: 15px;
  width: 250px;
  height: 350px;
  background-color: aqua;
}

.pu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-surface-variant {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 0.01fr);
  grid-gap: 20px;
}
#card {
  color: white;
  background-color: rgb(73, 73, 73);
  width: 18rem;
  height: 18rem;
}
</style>
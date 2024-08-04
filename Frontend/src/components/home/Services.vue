<template>
  <v-container class="bg-surface-variant">
      <v-sheet class="ma-2 pa-2" id="card">
        <MDBCard>
          <img :src="service.photo" class="services_img" alt="Фотография услуги">
          <MDBCardBody>
            <p class="pu">{{service.title}}</p>
            <p>
              {{service.details}}
            </p>
          </MDBCardBody>
          <hr/>
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
}


.pu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-surface-variant {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;

}
#card {
  color: white;
  background-color: rgb(73, 73, 73);
  width: 300px;
  height: 500px;
}
</style>
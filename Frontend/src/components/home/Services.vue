<template>
  <v-container class="bg-surface-variant">
    <v-col v-for="(service, index) in allServices" :key="index" cols="" sm="4">
      <v-sheet class="ma-2 pa-2">
        <MDBCard style="width: 18rem">
          <MDBCardImg top :src="service.photo" alt="..."/>
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
    </v-col>
  </v-container>
</template>

<script lang="ts">
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, mdbRipple} from "mdb-vue-ui-kit";
import {defineComponent} from "vue";
// import {SERVISES_INTARFACE} from "@/store/interfaces/SERVISES_INTARFACE";


export default defineComponent({
  name: "Services",
  props: {
    allServices: Array
  },
  components: {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,
  },
  async mounted() {
    await this.$store.dispatch("fetchAllServices");
    console.log(this.$store.state.ServicesState.services);
    
  },
  computed: {
    allServices(): any[] {
      return this.$store.state.ServicesState.services
    }
  }
})
</script>

<style scoped>
.services_img {
  width: 240px;
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
</style>
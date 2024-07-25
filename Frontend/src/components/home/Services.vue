<template>
  <v-container class="bg-surface-variant">
    <v-col v-for="n in 9" :key="n" cols="" sm="4">
      <v-sheet class="ma-2 pa-2">
        <MDBCard style="width: 18rem">
          <MDBCardImg top src="https://mdbootstrap.com/img/new/standard/city/062.webp" alt="..." />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the
              card's content.
            </MDBCardText>
          </MDBCardBody>
          <hr />
          <p class="pu">254545 </p>
        </MDBCard>
      </v-sheet>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, mdbRipple } from "mdb-vue-ui-kit";

const vMdbRipple = mdbRipple

console.log("Services component loaded");
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
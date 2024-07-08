<template>
    <MDBCard class="MDBCard">
      <router-link to="" v-mdb-ripple="{ color: 'light' }">
        <img src="../../../public/Image.jpg" class="services_img"/>
      </router-link>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </MDBCardText>
        <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </template>
  
  <script setup lang="ts">
  import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple } from "mdb-vue-ui-kit";

  const vMdbRipple = mdbRipple
  
  console.log("Services component loaded");
  </script>
  
  <style scoped>
.services_img{
    width: 240px;
    height: 250px;
}
.MDBCard{
    padding: 5px;
    margin: 15px;
    width: 250px;
    height: 350px;
    background-color: aqua;
}
  </style>
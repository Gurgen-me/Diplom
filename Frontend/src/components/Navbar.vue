<template>
    <MDBNavbar expand="lg" light bg="white" container>
      <MDBNavbarToggler
        target="#navbarExample01"
        @click="collapse1 = !collapse1"
      ></MDBNavbarToggler>
      <MDBCollapse id="#navbarExample01" v-model="collapse1">
        <MDBNavbarNav class="mb-2 mb-lg-0">
          <MDBNavbarItem to="/" active> Home </MDBNavbarItem>
          <MDBNavbarItem to="/about"> About </MDBNavbarItem>
          <MDBNavbarItem to="portfolio"> Portfolio </MDBNavbarItem>
          <MDBNavbarItem to="/faq"> FAQ </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
</template>

<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';
  const collapse1 = ref(false);
</script>

<style>

</style>
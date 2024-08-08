<template>
    <MDBNavbar expand="lg" dark bg="#1d1f23" container>
      <MDBNavbarBrand>
        <router-link to="/"><h3> Sarera </h3> </router-link>
      </MDBNavbarBrand>
      <MDBNavbarToggler
        target="#navbarExample01"
        @click="collapse1 = !collapse1"
      ></MDBNavbarToggler>
      <MDBCollapse id="#navbarExample01" v-model="collapse1">
        <MDBNavbarNav class="nav">
          <MDBNavbarItem to="/"> Home </MDBNavbarItem>
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
.nav {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
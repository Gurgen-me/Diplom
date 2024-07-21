<template>
  <MDBNavbar expand="lg" light bg="black" container>
    <router-link to="/" class="nav-link">GM</router-link>
    <MDBNavbarToggler
      target="#navbarExample02"
      @click="collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarExample02" v-model="collapse2">
      <MDBNavbarNav  right class="mb-2 mb-lg-0">
        <MDBNavbarItem>
          <router-link to="/" class="nav-link">Главная</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <router-link to="/about" class="nav-link">О нас</router-link>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse
} from 'mdb-vue-ui-kit';

const collapse2 = ref(false);
</script>

<style>
.nav-link {
  color: white;
}
.nav-link:hover {
  color: rgb(121, 121, 121);
}
.navbar-toggler {
  background-color: #ffffff;
}
</style>
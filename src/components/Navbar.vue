<template>
  <MDBNavbar expand="lg" light bg="white" container>
    <MDBNavbarToggler
      target="#navbarExample02"
      @click="collapse2 = !collapse2"
    ></MDBNavbarToggler>
    <MDBCollapse id="navbarExample02" v-model="collapse2">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem>
          <router-link to="/" class="nav-link">Home</router-link>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <router-link to="/faq" class="nav-link">FAQ</router-link>
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
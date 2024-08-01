<template>
  <header>
    <MDBNavbar expand="lg" light bg="black" container>
      <router-link to="/" class="ashki">GM</router-link>
      <MDBNavbarToggler target="#navbarExample02" @click="collapse2 = !collapse2"></MDBNavbarToggler>
      <MDBCollapse id="navbarExample02" v-model="collapse2">
        <MDBNavbarNav right class="mb-2 mb-lg-0">
          <div class="all_ashki">
            <router-link to="/" class="ashki">Главная</router-link>
            <router-link to="/portfolio" class="ashki">Портфолио</router-link>
            <router-link to="/about" class="ashki">О нас</router-link>
            <router-link to="/faq" class="ashki">FAQ</router-link>
          </div>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </header>
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
header {
  max-width: 1600px;
}
.all_ashki {
  display: flex;
  margin: 5px 15px;
  justify-content: space-between;
}
.ashki {
  color: white;
  display: flex;
  justify-content: space-between;
}

.ashki:hover {
  display: flex;
  justify-content: space-between;
  color: rgb(121, 121, 121);
}

.ashki:active {
  display: flex;
  justify-content: space-between;
  color: rgb(121, 121, 121);
}

.navbar-toggler {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>
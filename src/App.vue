import "mdb-vue-ui-kit/css/mdb.min.css";

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");



<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>

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
<style>
*{
  padding: 0;
  box-sizing: border-box;
}
#app {
  margin: 0 auto;
  max-width: 1600px;
  background-color: #1d1f23;
  color: white;
}
</style>
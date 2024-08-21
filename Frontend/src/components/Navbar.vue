<template>
  <nav class="navbar navbar-expand-lg  bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Sarera</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Портфолио</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">О нас</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
#navbarNavDropdown{
  display: flex;
  justify-content: end;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: none;
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
.navbar-toggler[data-v-4d808a77] {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: var(--bs-navbar-color);
  background-color: transparent;
  border: none;
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}
.container-fluid{
  max-width: 1600px;
}
</style>
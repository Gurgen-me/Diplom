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
.container-fluid{
  max-width: 1600px;
}
</style>
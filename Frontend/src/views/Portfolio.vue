<template>
    <Slideportfolio />
  <BeforeAfter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slideportfolio from "../components/portfolio/Slideportfolio.vue";
import BeforeAfter from "../components/portfolio/Before-after.vue";

export default defineComponent({
    name: "Portfolio",
    data: () => ({
    }),

    components: {
      BeforeAfter,
        Slideportfolio,
    },

})
</script>

<style scoped>

</style>
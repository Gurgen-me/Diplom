<template>
  <v-container class="bg-surface-variant">
    <v-sheet class="ma-2 pa-2" id="card">
      <div class="img_about">
        <img :src="portfolio.after" class="services_img" alt="Наши работы" />
      </div>
    </v-sheet>
  </v-container>
</template>


<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "Services",
  data: () => ({
    show: false,
  }),
  props: {
    portfolio: {
      required: true,
      type: Object
    }
  },
  components: {

  },
})
</script>

<style scoped>
.services_img {
  width: 300px;
  height: 200px;
  border-radius: 15px;
}
#card:hover {
  transform: scale(1.05);
  transition: all .3s;
  border-radius: 15px;
}

.bg-surface-variant {
  display: flex;
  justify-content: center;

}
#card {
  display: flex;
  width: 300px;
  height: 300px;
  padding: 15px;
  border-radius: 15px;
}


</style>
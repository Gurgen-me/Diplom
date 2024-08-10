<script lang="ts">
import {defineComponent} from "vue";
import services from "../home/Services.vue";

export default defineComponent({
  name: "Modal",
  computed: {
    services() {
      return services
    }
  },
  data() {
    return {}
  },
  props: {
    isOpen: {
      required: true,
      type: Boolean,
      readonly: false
    }
  },
  components: {},
})
</script>

<template>
  <div class="background-modal">
    <div class="modal_open" @click="(e) => e.stopPropagation()">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.background-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  color: white;
}

.modal_open {
  background-color: #ffffff;
  width: 800px;
  height: 600px;
  color: #1d1f23;
}

</style>
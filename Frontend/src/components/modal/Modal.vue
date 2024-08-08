<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Modal",
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
    <div class="modal_open">
      <button @click="isOpen = false">x</button>
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
  z-index: 1000;
  color: white;
}

.modal_open {
  background-color: #ffffff;
  width: 400px;
  height: 200px;
  color: #1d1f23;
}

</style>
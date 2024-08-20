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
  background-color: #535353;
  border-radius: 25px;
  width: 800px;
  height: max-content;
  color: #1d1f23;
  overflow-y: auto;
  overflow-x: hidden;
}

@media (min-width: 992px) and (max-width: 1199px) {
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
    background-color: #535353;
    border-radius: 25px;
    width: 800px;
    height: 600px;
    color: #1d1f23;
  }

}


@media (min-width: 768px) and (max-width: 991px) {
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
    background-color: #535353;
    border-radius: 25px;
    width: 600px;
    height: 400px;
    color: #1d1f23;
  }

}


@media (max-width: 767px) {
  .modal_open {
    background-color: #535353;
    border-radius: 25px;
    width: 600px;
    height: 300px;
    color: #1d1f23;
  }
}


@media (max-width: 480px) {
  .modal_open {
    background-color: #535353;
    border-radius: 25px;
    width: 400px;
    height: 400px;
    color: #1d1f23;
  }
}
@media (max-width: 344px) {
  .modal_open {
    background-color: #535353;
    border-radius: 25px;
    width: 300px;
    height: 500px;
    color: #1d1f23;
  }
}
</style>
<template>
  <v-container class="bg-surface-variant" @click="showModal">
      <v-sheet class="ma-2 pa-2" id="card">
        <MDBCard>
          <img :src="service.photo" class="services_img" alt="Фотография услуги">
          <MDBCardBody>
            <p class="pu">{{service.title}}</p>
          </MDBCardBody>
          <p class="pu">{{service.price}} ₽ </p>
        </MDBCard>
      </v-sheet>
  </v-container>

  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
            class="modal-header"
            id="modalTitle"
        >
          <slot name="header">
            {{ service.title }}

            <button
                type="button"
                class="btn-close"
                @click="close"
                aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
            class="modal-body"
            id="modalDescription"
        >
          <slot name="body">
            <img :src="service.photo"  alt="Фотография услуги">
            <p>{{ service.details }} </p>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
                type="button"
                class="btn-green"
                @close="closeModal"
                aria-label="Close modal"
            >
              {{ service.price }} ₽
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {MDBCard, MDBCardBody} from "mdb-vue-ui-kit";
import {defineComponent} from "vue";
export default defineComponent({
  name: "Services",
  data: () => ({
      show: false,
    }),
  props: {
    service: {
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
  flex-direction: column;
  padding: 15px;

}
#card {
  color: white;
  width: 300px;
  height: 300px;
  margin-top: 5px;
  border-radius: 15px;
}
.info {
  margin-left: 10px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #6a6a6a;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: #000000;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
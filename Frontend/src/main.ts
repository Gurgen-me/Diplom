import { createApp } from 'vue'
import { createStore } from 'vuex'
import "mdb-vue-ui-kit/css/mdb.min.css";
import App from "./App.vue";
import router from "./router";


const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
        allServices (state) {
        state.count++
      }
    }
  })
  const app = createApp(App).use(router).mount("#app");

  app.use(store)
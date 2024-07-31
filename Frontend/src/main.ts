import { createApp } from 'vue'
import "mdb-vue-ui-kit/css/mdb.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";


createApp(App).use(router).use(store).mount("#app");
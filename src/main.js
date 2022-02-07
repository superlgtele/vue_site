import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import UseRouter from "./router.js";

createApp(App).use(store).use(UseRouter).mount("#app");

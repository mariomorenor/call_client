import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-3-socket.io";
import { io } from "socket.io-client";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app
  .use(router)
  .use(pinia)
  .use(
    new VueSocketIO({
      debug: true,
      connection: io("http://localhost:3000"),
    })
  );

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-3-socket.io";
import { io } from "socket.io-client";
import { createPinia } from "pinia";
import { useStore } from "./store"

const app = createApp(App);
const pinia = createPinia();

import { Peer } from "peerjs"

app
  .use(router)
  .use(pinia)
  .use(
    new VueSocketIO({
      debug: true,
      connection: io("http://192.168.250.125:3000"),
    })
  );


const store = useStore();
store.peer = new Peer();



app.mount("#app");

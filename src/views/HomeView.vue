<template>
  <video id="remoteAudio"></video>
  <main v-if="!callInProgress">
    <h2>Sala de Espera</h2>
    <h4>Muy pronto será atendido por un agente, agradecemos su paciencia...</h4>
    <progress></progress>
  </main>
  <main v-else>
    <h2>Conectado!</h2>
    <button @click="closeCall()">Colgar</button>
  </main>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useStore } from '../store';

export default {
  name: "HomeView",
  data() {
    return {
      callInProgress: false
    }
  },
  beforeMount() {
    let client = sessionStorage.getItem("client");
    if (!client) {
      this.$router.replace({ name: "Login" })
    }
    client = JSON.parse(client);
    // this.$socket.emit("nuevo", client)
  },
  mounted() {
    sessionStorage.clear();
    this.peer.on("call", (call) => {
      this.call = call;
      navigator
        .mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          this.call.answer(stream);
          this.callInProgress = true
          this.call.on("stream", (remoteStream) => {
            const audio = document.getElementById("remoteAudio");
            audio.srcObject = remoteStream;
            audio.play();

          })
        })
    })
  },
  methods: {
    closeCall() {
      this.call.close();
      this.$socket.emit("terminar_llamada", this.client);
      this.$router.replace({
        name: "Reload"
      });

    }
  },
  computed: {
    ...mapWritableState(useStore, ["client", "peer", "call"])
  },
}
</script>

<style>
video {
  position: absolute;
  z-index: -1;
}
</style>

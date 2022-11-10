<template>
  <video id="remoteAudio"></video>
  <main>
    <h2>Sala de Espera</h2>
    <h4>Muy pronto será atendido por un agente, agradecemos su paciencia...</h4>
    <progress></progress>
  </main>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useStore } from '../store';

export default {
  name: "HomeView",
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
          this.call.on("stream", (remoteStream) => {
            const audio = document.getElementById("remoteAudio");
            audio.srcObject = remoteStream;
            audio.play();
          })
        })
    })
  },
  computed: {
    ...mapWritableState(useStore, ["client", "peer", "call"])
  },
}
</script>

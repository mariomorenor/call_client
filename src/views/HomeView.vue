<template>
  <main>
    <h2>Sala de Espera</h2>
    <h4>Muy pronto será atendido por un agente, agradecemos su paciencia...</h4>
    <progress></progress>
  </main>
</template>

<script>
import { mapState } from 'pinia';
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
  mounted(){
    sessionStorage.clear();
  },  
  computed: {
    ...mapState(useStore, ["client"])
  },
}
</script>

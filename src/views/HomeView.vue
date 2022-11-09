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
  computed: {
    ...mapState(useStore, ["client"])
  },
}
</script>

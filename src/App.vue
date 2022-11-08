<script>
import { useStore } from './store';

export default {
  setup() {
    const store = useStore();

    return {
      store
    }
  },
  sockets: {
    connect() {

      this.$socket.emit("managers_conectados", null, (response) => {
        this.store.managers = [...response]
      });

    }
  },
}
</script>
<template>
  <router-view></router-view>
</template>

<style>

</style>
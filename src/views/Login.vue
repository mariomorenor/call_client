<template>
    <div>
        <h3>Bienvenido, por favor ingrese sus datos:</h3>
        <div>
            <label for="">Nombre:</label>
            <input type="text" v-model="client.name">
        </div>
        <div>
            <label for="">Cédula:</label>
            <input type="text" v-model="client.identity">
        </div>
        <div>
            <label for="">Carrera:</label>
            <input type="text" v-model="client.career">
        </div>
        <div>
            <label for="">Seleccione:</label><br>
            <select name="" id="" v-model="department">
                <option selected disabled>Solo se muestran Departamentos disponibles</option>
                <option v-for="manager in managers" :key="manager.id" :value="manager.department">{{ manager.department
                }}</option>
            </select>
            <button @click="reloadDepartments()">Recargar</button>
        </div>
        <hr>
        <div>
            <button @click="joinDepartment()">Conectarse!</button>
        </div>

    </div>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useStore } from '../store';

export default {
    name: "LoginView",
    data() {
        return {
            department: "Solo se muestran Departamentos disponibles"
        }
    },
    mounted() {

    },
    methods: {
        joinDepartment() {
            sessionStorage.setItem("client", JSON.stringify({ ...this.client, department: this.department, tipo: "cliente" }))
            this.$router.push({ name: "Home" });
            this.client = { ...this.client, department: this.department, tipo: "cliente", peer_id: this.peer.id, socket_id: this.$socket.id }
            console.log(this.client);
            this.$socket.emit("nuevo", { ...this.client, department: this.department, tipo: "cliente", peer_id: this.peer.id })
        },
        reloadDepartments() {
            this.$socket.emit("managers_conectados", null, (response) => {
                this.managers = [...response]
            });
        }
    },
    computed: {
        ...mapWritableState(useStore, ["managers", "client", "peer"])
    }
}
</script>
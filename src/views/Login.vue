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
        </div>
        <hr>
        <div>
            <button @click="joinDepartment()">Conectarse!</button>
        </div>

    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useStore } from '../store';

export default {
    name: "LoginView",
    data() {
        return {
            department: "Solo se muestran Departamentos disponibles"
        }
    },
    methods: {
        joinDepartment() {

            this.$router.push({ name: "Home" });
            this.$socket.emit("nuevo", { ...this.client, department: this.department, tipo: "cliente" })
        }
    },
    computed: {
        ...mapState(useStore, ["managers", "client"])
    }
}
</script>
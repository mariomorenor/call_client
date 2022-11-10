import { defineStore } from "pinia";

export const useStore = defineStore("main", {

    state: () => ({
        managers: [],
        client: {
            name: "",
            identity: "",
            career: ""
        },
        peer: {},
        call:{}
    })
});

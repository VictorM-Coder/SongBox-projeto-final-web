import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {UserResponse} from "@/services/auth/response/UserResponse";

export const useUserStore = defineStore('user', () => {
    const user = ref<UserResponse>( {
        username: "",
        jwt: "",
        role: ""
    })

    const isAdmin = computed(() => user.value.role == "admin")
    const isAuthenticated = computed(() => !!user.value.jwt)

    function logout() {
        user.value.username = ""
        user.value.jwt = ""
        user.value.role = ""
    }
    return { user, isAdmin, isAuthenticated, logout }
})
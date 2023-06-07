import type {User} from "@/model/User";
import {api} from "@/libs/axios";
import type {UserResponse} from "@/services/auth/response/UserResponse";
import {useUserStore} from "@/stores/userStore";

export const AuthService = {
    async signIn(user: User){
        const response = await api.public.post('/auth/local', user);
        const res = await api.public.get('users/me', {
            params: {
                populate: ['role']
            },
            headers: {
                Authorization: `Bearer ${response.data.jwt}`
            }
        })

        const userResponse: UserResponse = {
            jwt: response.data.jwt,
            role: res.data.role.type,
            username: response.data.user.username
        }

        const userStore = useUserStore()
        userStore.user = userResponse
        return userResponse
    }
}
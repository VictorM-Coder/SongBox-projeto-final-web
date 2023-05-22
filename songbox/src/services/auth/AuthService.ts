import type {User} from "@/model/User";
import {api} from "@/libs/axios";
import type {UserResponse} from "@/services/auth/response/UserResponse";

export const AuthService = {
    async signIn<UserResponse>(user: User) {
        const value = await api.public.post<UserResponse>('/auth/local', user);
        return value.data;
    }
}
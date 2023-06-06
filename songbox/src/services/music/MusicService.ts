
import {api} from "@/libs/axios";
import type {Music} from "@/model/Music";

export const MusicService = {
    async get() {
        const value = await api.public.get<Music[]>('/musics')
        return value.data;
    }
}

import {api} from "@/libs/axios";
import type {Music} from "@/model/Music";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import {useUserStore} from "@/stores/userStore";

const urlMusic = '/api/musics'
export const MusicService = {
    async get() {
        const value = await api.public.get<StrapiResponse<Music[]>>(urlMusic, {
            params: {
                populate: ['cover', 'artist'],
            }
        })
        return value.data.data;
    },

    async post(music: Music) {
        const value = await api.private.post<Music>(urlMusic, music)
        return value.data;
    },

    async put(music: Music, id: number) {
        const value = await api.private.put<Music>(`${urlMusic}/${id}`, music)
        return value.data;
    },

    async delete(id: number) {
        const value = await api.private.delete<Music>(`${urlMusic}/${id}`, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
        return value.data;
    },
}

import {api} from "@/libs/axios";
import type {Music} from "@/model/Music";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import {useUserStore} from "@/stores/userStore";
import {Artist} from "@/model/Artist";

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

    async post(music: Music, coverFile: File) {
        const { cover, ...musicData } = music

        const body = new FormData()
        body.append('data', JSON.stringify(musicData))
        body.append('files.cover', coverFile)

        const value = await api.private.post<Music>(urlMusic, body, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
        return value.data;
    },

    async put(music: Music, coverFile: File) {
        const { cover, ...musicData } = music

        const body = new FormData()
        body.append('data', JSON.stringify(musicData))
        body.append('files.cover', coverFile)

        const value = await api.private.put<Music>(`${urlMusic}/${music.id}`, body, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
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
import {api} from "@/libs/axios";
import type {Music} from "@/model/Music";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import {useUserStore} from "@/stores/userStore";
import {useNotificationStore} from "@/stores/useNotification";

const urlMusic = '/api/musics'
export const MusicService = {
    async get() {
        try {
            const value = await api.public.get<StrapiResponse<Music[]>>(urlMusic, {
                params: {
                    populate: ['cover', 'artist'],
                }
            })
            return value.data.data as Music[];
        } catch (error) {
            useNotificationStore().error('Falha ao buscar músicas')
        }
    },

    async getById(id: number) {
        try {
            const value = await api.public.get<StrapiResponse<Music>>(`${urlMusic}/${id}`, {
                params: {
                    populate: ['cover', 'artist'],
                }
            })
            return value.data.data as Music;
        } catch (error) {
            useNotificationStore().error('Falha ao buscar música')
        }
    },

    async post(music: Music, coverFile: File) {
        const { cover, ...musicData } = music

        const body = new FormData()
        body.append('data', JSON.stringify(musicData))
        body.append('files.cover', coverFile)

        try {
            const value = await api.private.post<Music>(urlMusic, body, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data;
        } catch (error) {
            useNotificationStore().error('Falha ao adicionar música')
        }
    },

    async put(music: Music, coverFile: File) {
        const { cover, ...musicData } = music

        const body = new FormData()
        body.append('data', JSON.stringify(musicData))
        body.append('files.cover', coverFile)

        try {
            const value = await api.private.put<Music>(`${urlMusic}/${music.id}`, body, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data;
        } catch (error) {
            useNotificationStore().error('Falha ao atualizar música')
        }
    },

    async delete(id: number) {
        try {
            const value = await api.private.delete<Music>(`${urlMusic}/${id}`, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data;
        } catch (error) {
            useNotificationStore().error('Falha ao deletar música')
        }
    },
}
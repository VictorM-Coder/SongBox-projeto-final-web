import {api} from "@/libs/axios";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import type {Artist} from "@/model/Artist";

const urlArtist = '/api/artists'
export const ArtistService = {
    async get() {
        const value = await api.public.get<StrapiResponse<Artist[]>>(urlArtist)
        return value.data.data;
    },
}
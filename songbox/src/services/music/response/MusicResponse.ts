import type {Music} from "@/model/Music";

export interface StrapiResponse<T> {
    data: T;
    meta: { pagination: Pagination }
}

export interface MusicResponse {
    id: number
    title:string
    artist: {
        id: number
        name: string
    }
    minutesDuration: number
    secondsDuration: number
    rate?: number
    releaseYear: number
    lyrics:string
    cover: {
        url: string
    }
}

export interface Pagination {
    page: number,
    pageCount: number,
    pageSize: number,
    total: number
}
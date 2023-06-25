import type {Artist} from "@/model/Artist";

export class Music {
    id: number
    title:string
    artist:Artist
    minutesDuration: number
    secondsDuration: number
    rate:number
    releaseYear: number
    lyrics:string
    cover: {
        url: string
    }

    constructor(id: number, title: string, artist: Artist, grade: number, release: number, lyrics: string, url: string) {
        this.id = id
        this.title = title;
        this.artist = artist;
        this.minutesDuration = 4
        this.secondsDuration = 20
        this.rate = grade;
        this.releaseYear = release;
        this.lyrics = lyrics;
        this.cover = {url: url};
    }
}
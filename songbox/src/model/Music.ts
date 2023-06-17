import type {Artist} from "@/model/Artist";

export class Music {
    id: number
    title:string
    artist:Artist
    minutesDuration: number
    secondsDuration: number
    grade:number
    releaseYear: number
    lyrics:string
    cover: {
        url: string
    }

    constructor(id: number, title: string, artist: Artist, grade: number, release: number, lyrics: string, url: string) {
        this.id = id
        this.title = title;
        this.artist = artist;
        this.minutesDuration = 0
        this.secondsDuration = 0
        this.grade = grade;
        this.releaseYear = release;
        this.lyrics = lyrics;
        this.cover = {url: url};
    }
}
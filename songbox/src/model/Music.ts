import type {Artist} from "@/model/Artist";

export class Music {
    title:string
    artist:Artist
    minutes:number
    seconds: number
    grade:number
    release: Date
    lyrics:string
    cover: {
        url: string
    }

    constructor(title: string, artist: Artist, grade: number, release: Date, lyrics: string, url: string) {
        this.title = title;
        this.artist = artist;
        this.minutes = 0
        this.seconds = 0
        this.grade = grade;
        this.release = release;
        this.lyrics = lyrics;
        this.cover = {url: url};
    }
}
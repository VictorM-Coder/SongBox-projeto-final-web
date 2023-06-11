import type {Artist} from "@/model/Artist";

export class Music {
    title:string
    artist:Artist
    duration:number
    grade:number
    release: Date
    lyrics:string
    cover: {
        url: string
    }

    constructor(title: string, artist: Artist, duration: number, grade: number, release: Date, lyrics: string, url: string) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.grade = grade;
        this.release = release;
        this.lyrics = lyrics;
        this.cover = {url: url};
    }
}
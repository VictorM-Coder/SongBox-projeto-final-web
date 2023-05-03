import type {Artist} from "@/model/Artist";

export class Music {
    id:number
    title:string
    artist:Artist
    duration:number
    grade:number
    release: Date
    lyrics:string
    imgLink:string

    constructor(id: number, title: string, artist: Artist, duration: number, grade: number, release: Date, lyrics: string, imgLink: string) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.grade = grade;
        this.release = release;
        this.lyrics = lyrics;
        this.imgLink = imgLink;
    }
}
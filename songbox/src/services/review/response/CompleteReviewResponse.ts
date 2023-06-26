export interface CompleteReviewResponse {
    id: number,
    title: string,
    postDate: Date,
    rate: number,
    review: string,
    author: {
        username: string
    }
    music: {
        id: number,
        title: string,
        artist: {id: number, name: string},
        lyrics: string,
        minutesDuration: number
        secondsDuration: number
        releaseYear: number
        cover: {
            url: string
        }
    }
}
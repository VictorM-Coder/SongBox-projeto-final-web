export interface ReviewResponse {
    id: number,
    title: string,
    rate: number,
    review: string,
    music: {
        id: number,
        title: string,
        artist: {id: number, name: string},
        cover: {
            url: string
        }
    }
}
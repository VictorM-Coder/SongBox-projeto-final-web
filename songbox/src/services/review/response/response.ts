export interface SimpleReviewResponse {
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
    },
    author: {
        username: string
    }
}
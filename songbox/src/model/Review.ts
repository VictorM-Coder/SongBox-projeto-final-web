export interface Review {
    title: string,
    review: string,
    postDate: Date,
    rate: number,
    music: number,
    tags: string[] | null
}
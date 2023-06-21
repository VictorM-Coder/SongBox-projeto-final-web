import {api} from "@/libs/axios";
import {useUserStore} from "@/stores/userStore";
import type {Review} from "@/model/Review";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";

const urlReview = '/api/reviews'
export const ReviewService = {
    async get() {
        const value = await api.public.get<StrapiResponse<Review[]>>(urlReview, {
            params: {
                populate: [],
            }
        })
        return value.data.data as Review[];
    },

    async getById(id: number) {
        const value = await api.public.get<StrapiResponse<Review>>(`${urlReview}/${id}`, {
            params: {
                populate: [],
            }
        })
        return value.data.data as Review;
    },

    async post(review: Review) {
        const body = new FormData()
        body.append('data', JSON.stringify(review))

        const value = await api.private.post<Review>(urlReview, body, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
        return value.data as Review;
    },

    async put(review: Review) {
        const body = new FormData()
        body.append('data', JSON.stringify(review))

        const value = await api.private.put<Review>(`${urlReview}/${review.id}`, body, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
        return value.data as Review;
    },

    async delete(id: number) {
        const value = await api.private.delete<Review>(`${urlReview}/${id}`, {
            headers: {
                Authorization: `Bearer ${useUserStore().user.jwt}`
            }
        })
        return value.data as Review;
    },
}
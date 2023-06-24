import {api} from "@/libs/axios";
import {useUserStore} from "@/stores/userStore";
import type {Review} from "@/model/Review";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import {TagService} from "@/services/tag/TagService";
import {useNotificationStore} from "@/stores/useNotification";

const urlReview = '/api/reviews'
export const ReviewService = {
    async get() {
        try {
            const value = await api.public.get<StrapiResponse<Review[]>>(urlReview, {
                params: {
                    populate: [],
                }
            })
            return value.data.data as Review[];
        } catch (error) {
            useNotificationStore().error('Falha ao buscar reviews')
        }
    },

    async getById(id: number) {
        try {
            const value = await api.public.get<StrapiResponse<Review>>(`${urlReview}/${id}`, {
                params: {
                    populate: [],
                }
            })
            return value.data.data as Review;
        } catch (error) {
            useNotificationStore().error('Falha ao buscar review')
        }
    },

    async post(review: Review) {
        const {id, tags, ...reviewData} = review
        const tagsList = (tags)? await TagService.postAll(tags): []

        const body = new FormData()
        body.append('data', JSON.stringify({...reviewData, tags: tagsList}))

        try {
            const value = await api.private.post<Review>(urlReview, body, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data as Review;
        } catch (error) {
            useNotificationStore().error('Falha ao adicionar review')
        }
    },

    async put(review: Review) {
        const body = new FormData()
        body.append('data', JSON.stringify(review))

        try {
            const value = await api.private.put<Review>(`${urlReview}/${review.id}`, body, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data as Review;
        } catch (error) {
            useNotificationStore().error('Falha ao atualizar review')
        }
    },

    async delete(id: number) {
        try {
            const value = await api.private.delete<Review>(`${urlReview}/${id}`, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data as Review;
        } catch (error) {
            useNotificationStore().error('Falha ao deletar review')
        }
    },
}
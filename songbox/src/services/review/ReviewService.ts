import {api} from "@/libs/axios";
import {useUserStore} from "@/stores/userStore";
import type {Review} from "@/model/Review";
import type {StrapiResponse} from "@/services/music/response/MusicResponse";
import {TagService} from "@/services/tag/TagService";
import {useNotificationStore} from "@/stores/useNotification";
import type {SimpleReviewResponse} from "@/services/review/response/response";
import type {CompleteReviewResponse} from "@/services/review/response/CompleteReviewResponse";

const urlReview = '/api/reviews'
export const ReviewService = {
    async getByUser(userId: number) {
        try {
            const value = await api.public.get<StrapiResponse<SimpleReviewResponse[]>>(`${urlReview}?filters[author][id][$eq]=${userId}`, {
                params: {
                    populate: ['music', 'music.artist', 'music.cover', 'author'],
                },
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data.data as SimpleReviewResponse[];
        } catch (error) {
            useNotificationStore().error('Falha ao buscar reviews')
        }
    },

    async getAvgMusic(musicId: number) {
        try {
            const value = await api.public.get<StrapiResponse<Review[]>>(`${urlReview}?filters[music][id][$eq]=${musicId}`, {
            })
            const reviews = value.data.data
            return (reviews.reduce((tot, review) => tot + review.rate, 0))/value.data.meta.pagination.total;
        } catch (error) {
            useNotificationStore().error('Falha ao buscar média')
        }
    },

    async getById(id: number) {
        try {
            const value = await api.public.get<StrapiResponse<CompleteReviewResponse>>(`${urlReview}/${id}`, {
                params: {
                    populate: ['music', 'music.cover', 'music.artist', 'author'],
                },
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data.data as CompleteReviewResponse;
        } catch (error) {
            useNotificationStore().error('Falha ao buscar review')
        }
    },

    async post(review: Review) {
        const {id, tags, ...reviewData} = review
        const tagsList = (tags)? await TagService.postAll(tags): []

        const body = new FormData()
        console.log(useUserStore().user.id)
        body.append('data', JSON.stringify({...reviewData, tags: tagsList, author: useUserStore().user.id}))

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
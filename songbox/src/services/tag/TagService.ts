import {api} from "@/libs/axios";
import {useUserStore} from "@/stores/userStore";
import type {Tag} from "@/model/Tag";
import type {AxiosResponse} from "axios";
import {AxiosError, isAxiosError} from "axios";
import type {ResponseTag} from "@/services/tag/ResponseTag/ResponseTag";

const urlReview = '/api/tags'
export const TagService = {
    async postAll(tags: string[]) {
        const tagsResponse: string[] = []

        for (const tag of tags) {
            const body = new FormData()
            body.append('data', JSON.stringify({tag: tag}))
            let value: AxiosResponse<ResponseTag> = {} as AxiosResponse
            try {
                value = await api.private.post<ResponseTag>(urlReview, body, {
                    headers: {
                        Authorization: `Bearer ${useUserStore().user.jwt}`
                    }
                })
                tagsResponse.push(value.data.data.id)
            } catch (error) {
                if (isAxiosError(error)) {
                    const axiosError = error as AxiosError
                    if (axiosError.response?.status == 400){
                        const idTag = await this.getByTagName(tag)
                        if (idTag) tagsResponse.push(idTag)
                    }
                }
            }
        }
        return tagsResponse
    },
    async getByTagName(tagName: string) {
        try {
            const value = await api.private.get<{data: Tag[]}>(`${urlReview}?filters[tag][$eq]=${tagName}`, {
                headers: {
                    Authorization: `Bearer ${useUserStore().user.jwt}`
                }
            })
            return value.data.data[0].id
        } catch (error) {
            console.log('erro na pegada')
        }
    }
}
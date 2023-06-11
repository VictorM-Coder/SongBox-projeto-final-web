import {BASE_URL} from "@/libs/axios";

function getUploadURL(url: string) {
    return `${BASE_URL}${url}`
}

export const useUploadFile = (url: string) => getUploadURL(url)
import axios from "axios";

export const BASE_URL = 'http://localhost:1337'

const publicApi = axios.create({
    baseURL: BASE_URL
});

const privateApi = axios.create({
    baseURL: BASE_URL
});

export const api = {
    public: publicApi,
    private: privateApi
}
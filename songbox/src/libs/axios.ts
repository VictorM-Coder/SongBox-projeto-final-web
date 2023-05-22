import axios from "axios";

const publicApi = axios.create({
    baseURL: 'http://localhost:1337/api'
});

export const api = {
    public: publicApi,
}
import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue';
import MusicPage from "@/views/MusicPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/music',
        name: 'music',
        component: MusicPage,
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;

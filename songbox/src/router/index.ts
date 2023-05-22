import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue';
import MusicPage from "@/views/MusicPage.vue";
import Login from "@/views/Login.vue";

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
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;

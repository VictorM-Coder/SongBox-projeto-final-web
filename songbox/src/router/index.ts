import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue';
import MusicPage from "@/views/MusicPage.vue";
import Login from "@/views/Login.vue";
import Admin from "@/views/Admin.vue";
import {useUserStore} from "@/stores/userStore";

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
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        meta: { permissions: ['admin'], requiresAuth: true }
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = (useUserStore().user.username);
    if (requiresAuth && !isAuthenticated) {
        next('/login');
        console.log("nao deu")
    } else {
        next();
    }
});

export default router;

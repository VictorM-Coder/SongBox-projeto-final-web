import { createRouter, createWebHistory } from 'vue-router';
import type {RouteRecordRaw} from "vue-router";
import Home from '../views/Home.vue';
import MusicPage from "@/views/MusicPage.vue";
import Login from "@/views/Login.vue";
import Admin from "@/views/Admin.vue";
import {useUserStore} from "@/stores/userStore";
import Reviews from "@/views/Reviews.vue";

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
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: Reviews
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = (useUserStore().user.username);
    const userRoles = [...useUserStore().user.role]

    if ((requiresAuth && !isAuthenticated) || hasRole(userRoles, to.meta.roleRequired as string)) {
        next('/login');
    } else {
        next();
    }
});

function hasRole(userRoles: string[], requiredRole: string){
    return userRoles.includes(requiredRole)
}

export default router;

import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from "@/views/Tabs.vue";

const routes = [
    {
        path: '',
        redirect: '/tabs/home'
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: 'home',
            },
            {
                path: 'home',
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'night',
                component: () => import('@/views/Night.vue')
            },
            {
                path: 'lotus',
                component: () => import('@/views/Lotus.vue')
            },
            {
                path: 'music',
                component: () => import('@/views/Music.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router

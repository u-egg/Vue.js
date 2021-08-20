import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Join from '../views/Join.vue'
import Profile from '../views/Profile.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/main',
            component: Main
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/join',
            component: Join
        },
        {
            path: '/profile',
            component: Profile
        },


    ]
})
export default router
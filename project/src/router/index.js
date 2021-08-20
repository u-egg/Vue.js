import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Join from '../views/Join.vue'
import Profile from '../views/Profile.vue'
// import store from '@/vuex/store'

const routerHistory = createWebHistory()

// const requireAuth = () => (from, to, next) => {
//     if (store.getters.getIsAuth) return next() // isAuth === true면 페이지 이동
//     next('/') // isAuth === false면 다시 로그인 화면으로 이동
// }

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
            // beforeEnter: requireAuth() // HelloWorld에 진입하기 전에 requireAuth 함수를 실행한다,
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
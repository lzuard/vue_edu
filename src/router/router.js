import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage"
import About from "@/pages/About"
import SinglePostPage from "@/pages/SinglePostPage"
import WeatherForecast from "@/pages/WeatherForecast"

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts/',
        component: PostPage
    },
    {
        path: '/About/',
        component: About
    },
    {
        path:'/posts/:id',
        component: SinglePostPage
    },
    {
        path:'/weather/',
        component: WeatherForecast
    }
]


const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;
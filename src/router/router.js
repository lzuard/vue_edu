import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage"
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Blogs/',
        component: PostPage
    }
]


const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;
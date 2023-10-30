import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/views/error/ErrorPage"
import Home from "@/views/home/HomePage"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        { path : "/", name : "home", component : Home },
        {
            path : "/:pathMatch(.*)",
            name : "not-found",
            component : ErrorPage
        }
    ]
});

export default router;
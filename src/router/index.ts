import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: "index",
                    component: () => import("../views/HomeView.vue"),
                },
                {
                    path: "/:catchAll(.*)",
                    name: "error-404",
                    component: () => import("../views/PageNotFound.vue"),
                },
            ],
        },
        {
            path: "/dashboard",
            component: DashboardLayout,
            children: [
                {
                    name: "dashboard",
                    path: "",
                    component: () => import("../views/AboutView.vue"),
                },
            ],
        },
    ],
});

export default router;

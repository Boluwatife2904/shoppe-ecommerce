import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: () => import("../views/HomeView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/ContactView.vue"),
        },
        {
            path: "/terms-of-service",
            name: "terms-of-service",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/shipping-and-returns",
            name: "shipping-and-returns",
            component: () => import("../views/ShippingAndReturnsView.vue"),
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/DashboardIndexView.vue"),
        },
        {
            path: "/:catchAll(.*)",
            name: "error-404",
            component: () => import("../views/PageNotFound.vue"),
        },
    ],
});

export default router;

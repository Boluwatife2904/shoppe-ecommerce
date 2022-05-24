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
            path: "/shop",
            name: "shop",
            component: () => import("../views/ShopView.vue"),
        },
        {
            path: "/blog",
            name: "blog",
            component: () => import("../views/BlogView.vue"),
        },
        {
            path: "/terms-of-service",
            name: "terms-of-service",
            component: () => import("../views/TermsOfServiceView.vue"),
        },
        {
            path: "/shipping-and-returns",
            name: "shipping-and-returns",
            component: () => import("../views/ShippingAndReturnsView.vue"),
        },
        {
            path: "/privacy-policy",
            name: "privacy-policy",
            component: () => import("../views/PrivacyPolicyView.vue"),
        },
        {
            path: "/forgot-password",
            name: "forgot-password",
            component: () => import("../views/ForgotPasswordView.vue"),
        },
        {
            path: "/auth",
            name: "auth",
            component: () => import("../views/AuthView.vue"),
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
    scrollBehavior(_, _2, _3) {
        return { el: "nav", top: 50, behavior: "smooth" };
    },
});

export default router;

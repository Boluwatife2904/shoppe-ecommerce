import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // OTHER GENERIC PAGE (HOME, ABOUT, CONTACT, TERMS OF SERVICE........)
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
        // AUTH PAGES
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
        // CART, CHECKOUT AND ORDER CONFIRMATION PAGES
        {
            path: "/cart",
            name: "cart",
            component: () => import("../views/CartView.vue"),
        },
        {
            path: "/checkout",
            name: "checkout",
            component: () => import("../views/CheckoutView.vue"),
        },
        {
            path: "/order-confirmation/:slug",
            name: "order-confirmation",
            component: () => import("../views/OrderConfirmationView.vue"),
        },
        // DASHBOARD PAGES
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("../views/DashboardIndexView.vue"),
        },
        // ERROR 404 PAGE
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

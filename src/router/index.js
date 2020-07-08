import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "",
        name: "main",
        redirect: { name: "movie-popular" },
    },
    {
        path: "/popular",
        name: "movie-popular",
        component: () => import("@/views/appMovie-popular.vue"),
    },
    {
        path: "/movie/:id",
        component: () => import("@/views/appMovie-item.vue"),
    },
    {
        path: "/search",
        component: () => import("@/views/appMovie-search.vue"),
    },
    {
        path: "/favourites",
        name: "appMovie-favourites",
        component: () => import("@/views/appMovie-favourites.vue"),
    },
    {
        path: "*",
        redirect: { name: "movie-popular" },
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;

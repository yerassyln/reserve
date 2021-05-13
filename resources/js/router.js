import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Category from "./views/Category.vue";
import Restaurant from "./views/Restaurant.vue";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import NotFound from "./components/NotFoundPage";

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash, behavior:'smooth'}
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes:[
        { path: '*', redirect: '/404' },
        {
            path: "/",
            name: "index",
            components: { default: Index, header: Navbar, footer: Footer },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/category/",
            name: "category",
            components: { default: Category, header: Navbar, footer: Footer },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/restaurant/",
            name: "restaurant",
            components: { default: Restaurant, header: Navbar, footer: Footer },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/404",
            name: "NotFoundPage",
            components: { default: NotFound, header: Navbar, footer: Footer },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },


    ]
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})
export default router;


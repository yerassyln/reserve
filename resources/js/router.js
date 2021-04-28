import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

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
        {
            path: "/",
            name: "index",
            components: { default: Index, header: Navbar, footer: Footer },
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


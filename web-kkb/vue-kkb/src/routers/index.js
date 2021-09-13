import Vue from 'vue';
// import Router from "vue-router";
import Router from "./kvue-router";
import Home from "../components/Home/Home.vue";
import About from "../components/About/About.vue";
Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
];

const router = new Router({ routes });

export default router;
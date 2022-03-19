/*
 * @Author: TonyInBeijing
 * @Date: 2021-10-27 22:13:05
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-19 11:41:07
 * @FilePath: /notebook/vue3-geekbang/geek-admin/src/router/index.js
 * @Description: 
 * 
 */
import {
    createRouter,
    createWebHashHistory
} from "./grouter/index";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import MyChart from "../pages/g2.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: MyChart
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 16:06:05
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-04 16:09:56
 * @FilePath: \notebook\demo\vue3-demo\src\router\index.js
 * @Description: 
 * 
 */
import {
    createRouter,
    createWebHashHistory
} from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

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

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-08 22:47:11
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-09 21:42:06
 * @FilePath: /notebook/demo/vue3-demo/src/router/miniRouter.js
 * @Description: 手写一个 mini vue-router
 * 
 */

import { inject } from "vue";

const ROUTER_KEY = "__router__";

const createRouter = options => new Router(options);

const useRouter = () => inject(ROUTER_KEY);

const createWebHashHistory = () => {
    const bindEvents = fn => {
        window.addEventListener("hashchange", fn);
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || "/"
    };
};

class Router {
    constructor(options) {
        this.history = options.history;
        this.routes = options.routes;
        this.current = ref(this.history.url);
        this.history.bindEvents(() => {
            this.current.value = window.location.hash.slice(1);
        });
    };
    install(app) {
        app.provide(ROUTER_KEY, this);
    };
};

export {
    createRouter,
    createWebHashHistory,
    useRouter
};
/**
 * @description 手写一个迷你vue-router
 * @author 越浩玮
 */

import { inject, ref } from "vue";
const ROUTER_KEY = "__router__";

function createRouter(options) {
    return new Router(options);
}

function useRouter() {
    return inject(ROUTER_KEY);
}

function createWebHashHistory() {
    function bindEvents(fn) {
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || "/"
    }
}

class Router {
    constructor(options) {
        this.history = options.history;
        this.routes = options.routes;
        this.current = ref(this.history.url);

        this.history.bindEvents(() => {
            this.current.value = window.location.hash.slice(1)
        });
    }
    install(app) {
        app.provide(ROUTER_KEY, this);
    }
}

export { createRouter, createWebHashHistory, useRouter }
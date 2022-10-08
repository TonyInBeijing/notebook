/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 12:52:10
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-06 13:11:54
 * @FilePath: \notebook\demo\vue3-demo\src\store\miniVuex.js
 * @Description: miniVuex
 * 
 */

import { inject, reactive } from "vue";

const STORE_KEY = "__store__";


const useStore = () => inject(STORE_KEY);

const createStore = options => new Store(options);

class Store {
    constructor(options) {
        this._state = reactive({
            data: options.state()
        });
        this._mutations = options.mutations;
    }
    // TODO: use() 会调用下面方法，将 store 挂载在根组件(app)上
    install(app) {
        app.provide(STORE_KEY, this);
    }

    get state() {
        return this._state.data;
    }

    commit = (type, payload) => {
        const mutation = this._mutations[type];
        mutation && mutation(this.state, payload);
    }
};

export { useStore, createStore };
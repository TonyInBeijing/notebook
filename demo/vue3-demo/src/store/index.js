/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 12:30:36
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-08 22:16:25
 * @FilePath: /notebook/demo/vue3-demo/src/store/index.js
 * @Description: Vuex
 * 
 */

import { createStore } from "vuex";
// import { createStore } from "./miniVuex";

const store = createStore({
    state() {
        return {
            count: 666
        };
    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    getters: {
        double(state) {
            return state.count * 2;
        }
    },
    actions: {
        asyncAdd({ commit }) {
            setTimeout(() => {
                commit("add");
            }, 1000);
        }
    }
});

export default store;
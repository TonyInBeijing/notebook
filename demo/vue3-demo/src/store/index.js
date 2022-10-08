/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 12:30:36
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-06 13:09:42
 * @FilePath: \notebook\demo\vue3-demo\src\store\index.js
 * @Description: Vuex
 * 
 */

// import { createStore } from "vuex";
import { createStore } from "./miniVuex";

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
    }
});

export default store;
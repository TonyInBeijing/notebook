/**
 * @description Vuex
 */
import { createStore } from "./gvuex";

const store = createStore({
    state() {
        return {
            count: 666
        }
    },
    mutations: {
        add(state) {
            state.count++;
        }
    }
});

export default store;
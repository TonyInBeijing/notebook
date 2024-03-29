/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 15:35:16
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-08 22:16:48
 * @FilePath: /notebook/demo/vue3-demo/src/main.js
 * @Description: 
 * 
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/index";
import vuex from "./store/index";
// import miniVuex from "./store/index";

createApp(App)
    .use(router)
    .use(vuex)
    .mount('#app');

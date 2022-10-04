/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 15:35:16
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-04 16:11:00
 * @FilePath: \notebook\demo\vue3-demo\src\main.js
 * @Description: 
 * 
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from "./router/index";

createApp(App)
    .use(router)
    .mount('#app');

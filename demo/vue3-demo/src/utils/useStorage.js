/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-05 12:20:40
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-05 12:27:56
 * @FilePath: \notebook\demo\vue3-demo\src\utils\useStorage.js
 * @Description: 定制响应式数据
 * 
 */
import { ref, watchEffect } from "vue"

const useStorage = (name = "data", value = []) => {
    let data = ref(JSON.parse(JSON.stringify(value)));
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value));
    });
    return data;
}

export default useStorage;
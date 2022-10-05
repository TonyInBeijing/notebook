/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-05 12:28:06
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-05 12:43:21
 * @FilePath: \notebook\demo\vue3-demo\src\utils\useFavicon.js
 * @Description: 设置网页favicon
 * 
 */
import { ref, watch } from "vue";

const useFavicon = newIcon => {
    const favicon = ref(newIcon);
    const updateIcon = icon => {
        document.head.querySelectorAll(`link[rel*="icon"]`).forEach(el => el.href = `${icon}`)
    };
    const reset = () => favicon.value = "./favicon.ico";

    watch(favicon, i => {
        updateIcon(i);
    });

    return { favicon, reset };
};

export default useFavicon;
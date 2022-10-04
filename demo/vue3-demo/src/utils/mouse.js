/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 17:42:52
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-04 18:07:29
 * @FilePath: \notebook\demo\vue3-demo\src\utils\mouse.js
 * @Description: 
 * 
 */
import { onMounted, onUnmounted, ref } from "vue";

const useMouse = () => {
    const x = ref(0);
    const y = ref(0);

    const update = e => {
        x.value = e.pageX;
        y.value = e.pageY;
    };

    onMounted(() => {
        window.addEventListener("mousemove", update);
    });

    onUnmounted(() => {
        window.removeEventListener("mousemove");
    });

    return { x, y };

};

export default useMouse;
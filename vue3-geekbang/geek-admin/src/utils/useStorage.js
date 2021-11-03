/**
 * @description 同步本地储存
 */

import { ref, watchEffect, watch } from 'vue';

export default function useStorage(name, value = []) {
    let data = ref(JSON.parse(localStorage.getItem("name") || '[]'));
    watchEffect(() => {
        localStorage.setItem("name", JSON.stringify(data.value));
    });
    return data;
};

function useFavicon(newIcon) {
    const favicon = ref(newIcon);
    const updateIcon = icon => {
        console.log(icon);
    }
    const reset = () => favicon.value = "";

    watch(favicon, i => { updateIcon(i) });

    return { favicon, reset }
}
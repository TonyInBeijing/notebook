<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-09 21:40:52
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-09 21:44:13
 * @FilePath: /notebook/demo/vue3-demo/src/router/RouterView.vue
 * @Description: mini RouterView
 * 
-->
<template>
    <component :is="comp"></component>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "./miniRouter";

const router = useRouter();

const comp = computed(() => {
    const route = router.routes.find(route => route.path === router.current.value)
    return route ? route.component : null;
});

</script>
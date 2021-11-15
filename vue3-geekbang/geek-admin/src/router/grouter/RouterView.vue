<template>
    <component :is="comp"></component>
</template>
<script setup>
import { computed } from "vue";
import router from "..";
import { useRouter } from "../grouter";
let router = useRouter();
const comp = computed(() => {
    const route = router.routes[0].children.find(route => route.path === router.current.value);
    return route ? route.component : null;
});
</script>
<style>
</style>
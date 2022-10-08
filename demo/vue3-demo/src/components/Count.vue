<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 12:39:40
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-06 13:03:42
 * @FilePath: \notebook\demo\vue3-demo\src\components\Count.vue
 * @Description: 
 * 
-->
<template>
    <button @click="addCount">
        {{count}}
    </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "../store/miniVuex";
// import { useStore } from "vuex";
const store = useStore();
let count = computed(() => store.state.count);

const addCount = () => { store.commit('add'); };
</script>
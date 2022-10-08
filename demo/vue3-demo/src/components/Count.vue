<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 12:39:40
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-08 22:17:18
 * @FilePath: /notebook/demo/vue3-demo/src/components/Count.vue
 * @Description: 
 * 
-->
<template>
    <button @click="asyncCount">
        {{count}}
    </button>
</template>

<script setup>
import { computed } from "vue";
// import { useStore } from "../store/miniVuex";
import { useStore } from "vuex";
const store = useStore();
let count = computed(() => store.state.count);

const addCount = () => { store.commit('add'); };
const asyncCount = () => {store.dispatch('asyncAdd')}
</script>
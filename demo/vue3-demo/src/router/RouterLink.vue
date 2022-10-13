<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-09 22:35:24
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-09 22:36:59
 * @FilePath: /notebook/demo/vue3-demo/src/router/RouterLink.vue
 * @Description: mini RouterLink 
 * 
-->
<template>
    <a :href="'#'+props.to"></a>
</template>

<script setup>
import { defineProps } from "vue";
let props = defineProps({
    to: {
        type: String,
        require: true
    }
});
</script>
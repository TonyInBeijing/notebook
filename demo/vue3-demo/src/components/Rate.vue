<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-06 11:48:29
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-06 12:21:01
 * @FilePath: \notebook\demo\vue3-demo\src\components\Rate.vue
 * @Description: 评分组件
 * 
-->
<template>
    <div :style="fontStyle" @click="emitRate">
        {{rate}}
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
let props = defineProps({
    value: Number,
    theme: {
        type: String,
        default: "orange"
    }
});

const emits = defineEmits(["onRate"]);

console.log(props);

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));

let themeObj = {
    'black': '#00',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
};

const fontStyle = computed(() => `color: ${themeObj[props.theme]}`);

const emitRate = () => {
    emits("onRate", 1);
};

</script>

<style scoped>

</style>
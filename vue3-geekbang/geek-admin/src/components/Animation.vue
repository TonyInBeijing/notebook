<template>
    <div>
        <div class="box" :style="divwidth"></div>
        <button @click="change">click</button>
        <div class="box1"></div>
        <transition name="fade">
            <h1 v-if="showTitle">你好 Vue 3</h1>
        </transition>
        <button @click="toggle">show title</button>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";
let width = ref(10);
const divwidth = computed(() => `width: ${width.value}px`);
function change() {
    width.value += 10;
}

let showTitle = ref(false);
function toggle() {
    showTitle.value = !showTitle.value;
}
</script>
<style>
.box {
    background-color: red;
    height: 100px;
    transition: width 1s linear;
}
.box1 {
    width: 30px;
    height: 30px;
    position: relative;
    background: #d88986;
    animation: move 2s linear infinite;
}
@keyframes move {
    0% {
        left: 0px;
    }
    50% {
        left: 100px;
    }
    100% {
        left: 0;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
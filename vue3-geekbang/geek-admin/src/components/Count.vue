<template>
    <div @click="add">{{ count }} * 2 = {{ double }}</div>
    <button @click="asyncAdd">Async Add</button>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(() => store.getters.double);
function add() {
    store.commit('add');
}
function asyncAdd() {
    store.dispatch("asyncAdd");
}
</script>
<style>
</style>
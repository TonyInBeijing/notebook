<template>
    <h1>这是首页</h1>
    <TodoList />
    <div>你的评分是：{{ score }}</div>
    <Rate v-model="score" theme="red">
        <div>这是 slot</div>
    </Rate>
    <Animation />
</template>
<script setup>
import TodoList from '../components/Todolist.vue';
import Rate from '../components/Rate.vue';
import Animation from '../components/Animation.vue';
import { ref } from "vue";
let score = ref(3);
</script>
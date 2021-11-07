<template>
    <h1>这是首页</h1>
    <TodoList />
    <div>你的评分是：{{ score }}</div>
    <Rate v-model="score" theme="red">
        <div>这是 slot</div>
    </Rate>
</template>
<script setup>
import TodoList from '../components/Todolist.vue';
import Rate from '../components/Rate.vue';
import { ref } from "vue";
let score = ref(3);
function update(num) {
    score.value = num;
}
</script>
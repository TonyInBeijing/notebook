<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 16:00:07
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-04 17:47:55
 * @FilePath: \notebook\demo\vue3-demo\src\components\TodoList.vue
 * @Description: 
 * 
-->
<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{done: todo.done}">{{todo.title}}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone" />
            <span>{{active}}|{{all}}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useMouse from '../utils/mouse';

const useTodos = () => {

    let title = ref("");
    let todos = ref([]);

    let active = computed(() => {
        return todos.value.filter(v => !v.done).length;
    });

    let all = computed(() => todos.value.length);

    let allDone = computed({
        get: function () {
            return active.value === 0;
        },
        set: function (value) {
            todos.value.forEach(todo => { todo.done = value });
        }
    });

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        });
        title.value = "";
    };

    function clear() {
        todos.value.forEach(todo => {
            todo.done = false;
        });
    }

    return {
        title, todos, active, all, allDone, addTodo, clear
    };

};

const { title, todos, active, all, allDone, addTodo, clear } = useTodos();

let { x, y } = useMouse();


</script>

<style>
h1 {
    color: red;
}
</style>
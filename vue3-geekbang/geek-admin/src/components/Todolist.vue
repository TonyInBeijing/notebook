<template>
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <ul v-if="todos.length">
            <transition-group name="flip-list" tag="ul">
                <li v-for="todo in todos" :key="todo.title">
                    <input type="checkbox" v-model="todo.done" />
                    <span :class="{ done: todo.done }">{{ todo.title }}</span>
                </li>
            </transition-group>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone" />
            <span>{{ active }}/{{ all }}</span>
        </div>
        <transition name="model">
            <div class="info-wrapper" v-if="showModel">
                <div class="info">哥，你啥也没输入</div>
            </div>
        </transition>
    </div>
</template>
<script setup>
import { ref, computed } from "vue";

let { title, todos, showModel, addTodo, clear, active, all, allDone } = useTodo();



function useTodo() {
    let title = ref("");
    let todos = ref([{ title: "学习Vue", done: false }]);
    let showModel = ref(false);
    function addTodo() {
        if (title.value === "") {
            showModel.value = true;
            setTimeout(() => {
                showModel.value = false;
            }, 1000);
            return;
        }
        else {
            todos.value.push({
                title: title.value,
                done: false
            });
            title.value = "";
        }
    }
    function clear() {
        todos.value = todos.value.filter((v) => !v.done);
    }
    let active = computed(() => {
        return todos.value.filter(v => !v.done).length;
    });
    let all = computed(() => todos.value.length);
    let allDone = computed({
        get: function () {
            return active.value === 0;
        },
        set: function (value) {
            todos.value.forEach(todo => {
                todo.done = value;
            })
        }
    });
    return { title, todos, showModel, addTodo, clear, active, all, allDone }
}

</script>


<style>
.done {
    color: gray;
    text-decoration: line-through;
}
.info-wrapper {
    position: fixed;
    top: 20px;
    width: 200px;
}
.info {
    padding: 20px;
    color: white;
    background: #d88986;
}
.model-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}
.model-enter-active {
    transition: all 0.3s ease;
}
.model-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.model-leave-active {
    transition: all 0.3s ease;
}
.flip-list-move {
    transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
    transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
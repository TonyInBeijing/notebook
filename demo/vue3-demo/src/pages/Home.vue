<!--
 * @Author: TonyInBeijing
 * @Date: 2022-10-04 16:09:07
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-06 12:08:46
 * @FilePath: \notebook\demo\vue3-demo\src\pages\Home.vue
 * @Description: 
 * 
-->
<template>
    <h1>这是首页</h1>
    <Todolist></Todolist>
    <Rate :value="3" theme="black" @onRate="onRate"></Rate>
    <Rate :value="1" theme="red"></Rate>
</template>

<script setup>
import Todolist from '../components/Todolist.vue';
import Rate from "../components/Rate.vue";

const onRate = num => { console.log(num) };
</script>
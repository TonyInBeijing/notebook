/*
 * @Author: TonyInBeijing
 * @Date: 2023-05-15 22:31:16
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-05-15 22:45:47
 * @FilePath: /notebook/前端基础/react-study/src/redux/store.js
 * @Description: redux 学习
 * 
 */

// * Redux 是一个使用叫做 “action” 的事件来管理和更新应用状态的模式和工具库

import { createStore } from "redux";
// TODO: 创建一个 reducer  = (state, action) => newState ; 接收当前 state 和一个 action，返回最新的 state
const firstReducer = (state = {value : 0},action) => {
    
}

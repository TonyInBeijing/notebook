"use strict";
/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-11 16:07:30
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-11 16:07:31
 * @FilePath: \notebook\一些笔记\ts\src\index.ts
 * @Description:
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = __importDefault(require("./decorator"));
const myClass = new decorator_1.default("Cindy");
myClass.sayName();
exports.default = {};

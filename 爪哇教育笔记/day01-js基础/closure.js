/*
 * @Author: TonyInBeijing
 * @Date: 2023-09-06 19:13:45
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-06 20:31:39
 * @FilePath: /notebook/爪哇教育笔记/day01-js基础/closure.js
 * @Description: 闭包笔记
 * 
 */
//! num 会共用
(function () {
    var Person = (function () {
        var num = 0;
        function Person() {
            // 公有属性
        }
        Person.prototype.count = function () {
            num++;
            console.log(num);
        }
        return Person;
    })();

    var person1 = new Person();
    var person2 = new Person();
    person1.count(); // 1
    person2.count(); // 2
})();

//* 用法
(function () {
    var axios = require("axios");
    function apiGenerator() {
        var menuData = null;
        // 返回值永远相等
        return function getInitMenu() {
            if (menuData) {
                return Promise.resolve(menuData);
            }
            return axios.get("menuapi").then(res => {
                menuData = res;
                return menuData;
            });
        }
    }
    var generatorMenu
})();
"use strict";
/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 21:38:34
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-26 21:50:21
 * @FilePath: /notebook/playground/src/enum.ts
 * @Description:
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Items1;
(function (Items1) {
    Items1[Items1["Foo"] = 0] = "Foo";
    Items1[Items1["Bar"] = 1] = "Bar";
    Items1[Items1["Baz"] = 2] = "Baz"; // 2
})(Items1 || (Items1 = {}));
;
var Items2;
(function (Items2) {
    Items2[Items2["Foo"] = 0] = "Foo";
    Items2[Items2["Bar"] = 2] = "Bar";
    Items2[Items2["Baz"] = 3] = "Baz"; // 3
})(Items2 || (Items2 = {}));
;
// * 延迟枚举
const getNum = () => 1 + 2;
var Items3;
(function (Items3) {
    Items3[Items3["Foo"] = 0] = "Foo";
    Items3[Items3["Baz"] = 4] = "Baz";
    Items3[Items3["Bar"] = getNum()] = "Bar";
})(Items3 || (Items3 = {}));
;
console.log(Items3.Foo);
exports.default = {};

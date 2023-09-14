/*
 * @Author: TonyInBeijing
 * @Date: 2023-09-12 20:33:08
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-09-12 20:35:42
 * @FilePath: /notebook/playground/src/iterator.js
 * @Description: 迭代器 iterator
 * 
 */
const person = {
    cursor: 0,
    next() {
        const actions = ["eat", "sleep", "code"];
        if (this.cursor > 7) {
            return {
                done: true
            }
        }
        else {
            return {
                done: false,
                value: actions[this.cursor]
            }
        }
    }
};

console.log(person.next());
/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-16 21:59:02
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-16 23:38:14
 * @FilePath: /notebook/playground/src/nestedObject.js
 * @Description: 
 * 
 */
const obj = {
    a: {
        b: {
            c: 1
        }
    },
    b: 2,
    c: {
        d: 3
    },
    d: null,
    e: {
        f: [1, 2, 3]
    }
}
let time = 0;
function find(obj, path) {
    // TODO
    // time += 1;
    // console.log("time::", time);
    // console.log("obj::", obj);
    // console.log("path::", path);
    if (typeof obj !== "object") {
        return obj;
    }
    const pathArr = path.split(".");
    for (let i in obj) {
        const value = obj[i];
        if (path.includes(i)) {
            if (Array.isArray(value)) {
                const targetIndex = parseInt(path.split(i)[1][1]);
                return value[targetIndex];
            }
            else {
                if (typeof value === "object") {
                    return find(value, pathArr.filter(p => p !== i).toString().replaceAll(",", "."));
                }
                else {
                    if (value === 1) {
                        console.log(i);
                    }
                    return value;
                }
            }
        }
    }
}
const value1 = find(obj, 'a.b.c'); console.log("value1::", value1); // 1
const value2 = find(obj, 'e.f[2]'); console.log("value2::", value2); // 3
const value3 = find(obj, 'd.e'); console.log("value3::", value3); // undefined
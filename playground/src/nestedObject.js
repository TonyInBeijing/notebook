/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-16 21:59:02
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-17 18:05:44
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
function find(obj, path) {
    // TODO
    if (typeof obj !== "object") {
        return obj;
    }
    const pathArr = path.split(".");
    for (let i in obj) {
        const value = obj[i];
        if (path.includes(i)) {
            if (Array.isArray(value)) {
                const targetIndex = parseInt(path.split(i)[1][1]); //! 这个地方其实应正则匹配拿出下标
                return value[targetIndex];
            }
            else {
                if (typeof value === "object") {
                    return find(value, pathArr.filter(p => p !== i).toString().replaceAll(",", "."));
                }
                else {
                    return value;
                }
            }
        }
    }
}
const value1 = find(obj, 'a.b.c'); console.log("value1::", value1); // 1
const value2 = find(obj, 'e.f[2]'); console.log("value2::", value2); // 3
const value3 = find(obj, 'd.e'); console.log("value3::", value3); // undefined
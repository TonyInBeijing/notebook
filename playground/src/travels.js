/*
 * @Author: TonyInBeijing
 * @Date: 2023-08-17 22:40:45
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-08-18 02:05:14
 * @FilePath: /notebook/playground/src/travels.js
 * @Description: 深度优先遍历和广度优先遍历
 * 
 */

const obj = {
    node: 0,
    children: [
        {
            node: 1,
            children: [
                {
                    node: 2,
                },
                {
                    node: 3,
                    children: [
                        {
                            node: 4,
                            children: {
                                node: 5
                            }
                        }
                    ]
                }
            ]
        },
        {
            node: 6,
            children: [
                {
                    node: 7,
                    children: [
                        {
                            node: 8,
                            children: {
                                node: 9
                            }
                        }
                    ]
                }
            ]
        }
    ]
};

// 深度优先遍历
let deepResArr = [];
function deepTravels(nodeTree) {
    if (!nodeTree || typeof nodeTree !== "object") {
        return [];
    }
    else {
        let node = nodeTree.node;
        let children = nodeTree.children;
        if (typeof node === "number") {
            deepResArr.push(node);
        }
        if (children) {
            if (Array.isArray(children)) {
                for (let i in children) {
                    deepTravels(children[i]);
                }
            }
            else {
                typeof children.node === "number" ? deepResArr.push(children.node) : void 0;
            }
        }
    }
}

// 广度优先遍历
let wideResArr = [];
function wideTravels(nodeTree) {
    // TODO
    if (!nodeTree || typeof nodeTree !== "object") {
        return;
    }
    else {
        wideResArr.push(nodeTree.node);
        let children = nodeTree.children;
        while (children.length) {
            let firstNode = children.shift();
            if (typeof firstNode.node === "number") {
                wideResArr.push(firstNode.node);
            }
            if (Array.isArray(firstNode.children)) {
                for (let i in firstNode.children) {
                    children.push(firstNode.children[i]);
                }
            }
        }
    }
}

// deepTravels(obj);
// console.log(deepResArr);

wideTravels(obj);
console.log(wideResArr);

/**
 * @description 创建数组的几种方式
 */
var numbers = [1, 2, 3];
var numbers = new Array(1, 2, 3);
// 调用 Array 构造函数可以只传一个参数来指定数组长度
var numbers = new Array(10);
console.log(numbers); // [ <10 empty items> ]
console.log(numbers.length) // 10

/**
 * @description 数组的字符串表示
 */
var numbers = [1, 2, 3];
// toString();
console.log(numbers.toString());
// join();
console.log(numbers.join());

/**
 * @description 由已有数组创建新数组
 */
// concat 合并多个数组
var numbers = [0, 1, 2];
var numbers2 = [3, 4];
console.log(numbers.concat(numbers2)); // [0,1,2,3,4]
// splice 截取新数组
var numbers = [0, 1, 2, 3, 4];
console.log(numbers.splice(1, 1)); // [1]

/**
 * @description 数组增删方法
 */
var numbers = [0, 1, 2];
// push() 向数组末尾添加元素
numbers.push(3);
console.log(numbers);// [0,1,2,3];
// unshift() 向数组头部添加元素
numbers.unshift(4);
console.log(numbers); // [4,0,1,2,3];
// pop 在数组末尾删除元素
numbers.pop();
console.log(numbers); // [4,0,1,2];
// shift 在数组头部删除元素
numbers.shift();
console.log(numbers); // [0,1,2];

/**
 * @description 数组排序
 */

// reverse() 将数组中元素的顺序进行翻转
var numbers = [0, 1, 2];
numbers.reverse();
console.log(numbers) // [2,1,0]
// sort() 将数组按照字典顺序进行排序
var strs = ['a', 'c', 'd', 'b'];
strs.sort();
console.log(strs); // ['a','b','c','d']
// 传入比较大小的方法进行大小排序
function compare(num1, num2) {
    return num1 - num2;
}
var numbers = [0, 2, 1, 3];
numbers.sort(compare);
console.log(numbers);

/**
 * @description 不生成新数组的迭代器方法
 * 迭代器方法对数组中每一个元素应用一个函数，返回一个值、一组值或者一个新数组
 */

// forEach
function square(num) {
    console.log(num, num * num);
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(square);
// every() 接受一个返回值为 Boolean 类型的函数，对数组中的 每一个 元素使用该函数 都为true时返回true，否则返回false
// some() 接受一个返回值为 Boolean 类型的函数，对数组中的 每一个 元素使用该函数 有一个为true时返回true，否则返回false
function isEven(num) {
    return num % 2 === 0;
}
var numbers = [2, 4, 6, 8, 10];
var even1 = numbers.every(isEven);
var even2 = numbers.some(isEven);
console.log(even1, even2);

// ** reduce()方法接受一个函数，返回一个值，reduce会从一个累加值开始，不断对累加值和数组重的后续元素调用该函数，直到数组中的最后一个元素，最后返回得到的累加值
function add(sum, num) {
    return sum + num;
}
var numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers.reduce(add));

/**
 * @description 生成新数组的迭代器方法
 * 迭代器方法对数组中每一个元素应用一个函数，返回一个值、一组值或者一个新数组
 */

// map() & filter()
// filter 接受一个返回值为 Boolean 类型的函数，对数组内所有元素应用该函数，结果均为true时，返回结果为true的元素数组
function isEven(num) {
    return num % 2 === 0;
}
var numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers.filter(isEven));
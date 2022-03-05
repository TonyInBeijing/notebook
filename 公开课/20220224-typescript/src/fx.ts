/**
 * @description 泛型
 */

function test<T>(arg: T): T {
    return arg;
}

let res1: string = test("123");
let res2: number = test(123);

console.log(res1, res2);

export default {};
/**
 * @description 方法类型
 */

// void - 当函数没有返回数据，返回类型就是 void
function test():void {
    console.log("test");
};

// never - 函数肯定执行不完的时候返回类型就是 never
function error(message: string): never {
    throw new Error(message);
}


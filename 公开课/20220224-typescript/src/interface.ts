/**
 * @description 接口
 */

interface User {
    readonly name: string, // 初始化以后无法修改
    age: number,
    sex: string,
    func(name: string): string,
    [props: string]: any
};

interface Func {
    (name: string): string
}

function getUser(): User {
    return {
        name: "小明",
        age: 22,
        sex: "男",
        func(name: string) {
            return name;
        }
    }
};

// 如果我想开放这个类型的其他属性，约定该对象必须包含 username，password
let user: User = {
    name: "",
    age: 20,
    sex: "",
    nickname: "",
    func(name: string) {
        return name;
    }
}

let func: Func = (name: string) => name;

export default {};
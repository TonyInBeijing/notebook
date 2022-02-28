/**
 * @description 对象类型
 */

class Person {
    name: string;
    age: number;
    sex?: string; // ? - 可选属性
    constructor(name: string, age: number, sex?: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}

// 良好的代码提示
let r: Person = new Person("tony", 26, "male");

console.log(r);

export default {};
/**
 * @description 装饰器
 */

function FormatDate() {
    return function (target: any, key: any, descriptor: any) {
        // 拦截该装饰器所应用属性的 set 方法
        descriptor.set = function (d: Date) {
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let date = d.getDate();
            this['_' + key] = `${year}-${month}-${date}`;
        }
    }
}

interface User {
    name: string,
    age: number,
    [props: string]: any
}

class User {
    @FormatDate()
    set birthday(v: any) {
        this._birthday = v;
    }
    get birthday(): any {
        return this._birthday;
    }

    constructor({ name, age, birthday }: User) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }
}

let u = new User({name:"",age:22,birthday: new Date()});

console.log(u);

export default {};
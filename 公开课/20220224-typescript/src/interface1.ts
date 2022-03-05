/**
 * @description 实战
 */

interface User {
    name: string,
    sex: string,
    age: string
}

interface Admin {
    userName: string,
    userPassword: string
}

type Person = User | Admin;

let arr: Array<Person> = [
    {
        name: "",
        sex: "",
        age: ""
    },
    {
        userName: "",
        userPassword: ""
    }
];

export default {};
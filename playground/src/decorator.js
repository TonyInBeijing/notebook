/*
 * @Author: TonyInBeijing
 * @Date: 2022-08-31 23:10:05
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-08-31 23:11:53
 * @FilePath: /notebook/playground/src/decorator.js
 * @Description: 
 * 
 */
const sayName = () => { 
    console.log("Hello,my name is Tony"); 
};

class Person{
    constructor(name){
        this.name = name;
    }
    @sayName()
    say(){
        console.log(this.name);
    }
}; 

new Person("Jack").say();
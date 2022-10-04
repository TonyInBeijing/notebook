/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-13 13:07:33
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-13 17:41:23
 * @FilePath: \notebook\practice\var-let.js
 * @Description: 
 * 
 */



function varDeclare(a) {
    console.log(a); // Function a
    var a = 123;
    console.log(a); // 123

    function a() {};
    console.log(a); // 123
}

varDeclare(1);

// function letDeclare() {
//     let b = 123;
//     console.log(b);

//     function b() {}; // SyntaxError: Identifier 'b' has already been declared
//     console.log(b);
// }

// letDeclare();

function test1() {
    var funcA = function() {
        console.log("test1-1::", 1);
    }

    function funcA() {
        console.log("test1-2::", 2);
    }
    funcA();
}

test1(); // test1-1:: 1

function test2() {
    a();

    function a() {
        console.log("a");
    }
    b();
    var b = function() {
        console.log("b");
    }
}

test2(); // TypeError: b is not a function
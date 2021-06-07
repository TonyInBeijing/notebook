/**
 * 包 package
 */

// TODO 在Java中，我们使用package来解决名字冲突。
// Java定义了一种名字空间，称之为包：package。一个类总是属于某个包，类名（比如Person）只是一个简写，真正的完整类名是包名.类名。

// package myPackage;
class PackageTest {

}

// TODO 位于同一个包的类，可以访问包作用域的字段和方法。不用public、protected、private修饰的字段和方法就是包作用域。
// package hello;
class PackagePerson {
    // 包作用域
    void hello() {
        System.out.println("hello");
    }
}

class PackageMain {
    public static void main(String[] args) {
        PackagePerson packagePerson = new PackagePerson();
        packagePerson.hello();
    }
}

// TODO import 用来引入类名然后简写，不然需要每次调用时写完整类名
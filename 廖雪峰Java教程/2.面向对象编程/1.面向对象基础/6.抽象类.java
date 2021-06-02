/**
 * 抽象类 如果一个class定义了方法，但没有具体执行代码，这个方法就是抽象方法，抽象方法用abstract修饰。
 * 因为抽象类本身被设计成只能用于被继承，因此，抽象类可以强迫子类实现其定义的抽象方法，否则编译会报错。因此，抽象方法实际上相当于定义了“规范”。
 */
abstract class AbstractPerson {
    public abstract void run();
}

class AbstractStudent extends AbstractPerson {
    @Override
    public void run() {
        System.out.println("Student.run");
    }
}

class AbstractMain {
    public static void main(String[] args) {
        AbstractPerson person = new AbstractStudent();
        person.run();
    }
}
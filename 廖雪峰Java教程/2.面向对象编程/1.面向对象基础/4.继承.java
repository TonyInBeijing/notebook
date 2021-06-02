/**
 * 继承 继承是面向对象编程中非常强大的一种机制，它首先可以复用代码
 * Java只允许一个class继承自一个类，因此，一个类有且仅有一个父类。只有Object特殊，它没有父类。
 */
class PersonToExtend { // 超类、父类、基类
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

}

class StudentExtended extends PersonToExtend { // 子类、扩展类
    private int score;

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}

/**
 * protected 继承有个特点，就是子类无法访问父类的private字段或者private方法。
 * 为了让子类可以访问父类的字段，我们需要把private改为protected。用protected修饰的字段可以被子类访问
 * protected关键字可以把字段和方法的访问权限控制在继承树内部，一个protected字段和方法可以被其子类，以及子类的子类所访问
 */
class ProtectedPerson {
    protected String name;
    protected int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class Student2 extends ProtectedPerson {
    public String hello() {
        return "Hello" + name;
    }
}

/**
 * super super关键字表示父类。子类引用父类字段时，可以用super.fieldName
 * 在Java中，任何class的构造方法，第一行语句必须是调用父类的构造方法。如果没有明确地调用父类的构造方法，编译器会帮我们自动加一句super();
 */

class SuperPerson {
    protected String name;
    protected int age;

    public SuperPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student3 extends SuperPerson {
    protected int score;

    public Student3(String name, int age, int score) {
        /**
         * 如果父类没有默认的构造方法，子类就必须显式调用super()并给出参数以便让编译器定位到父类的一个合适的构造方法
         * 子类不会继承任何父类的构造方法。子类默认的构造方法是编译器自动生成的，不是继承的
         */
        super(name, age);
        this.score = score;
    }
}

class ExtendMain {
    public static void main(String[] args) {
        Student3 student3 = new Student3("小明", 18, 100);
        SuperPerson superPeson = new SuperPerson("大明", 30);
        /**
         * 向上转型 把一个子类类型安全地变为父类类型的赋值，被称为向上转型（upcasting） 向上转型实际上是把一个子类型安全地变为更加抽象的父类型
         */
        SuperPerson superPerson2 = new Student3("小小明", 8, 90);
        /**
         * 向下转型 把一个父类类型强制转型为子类类型，就是向下转型（downcasting）
         */
        SuperPerson superPerson3 = new Student3("", 20, 100); // 向上转型
        SuperPerson superPerson4 = new SuperPerson("", 20);
        Student3 student4 = (Student3) superPerson3; // ok
        Student3 student5 = (Student3) superPerson4; // runtime error! ClassCastException 因为子类功能比父类多，多的功能无法凭空变出来。
        // 因此，向下转型很可能会失败。失败的时候，Java虚拟机会报ClassCastException。
        // 使用instanceof 可以先判断实例的类型
        if (student5 instanceof SuperPerson) {
            Student3 student6 = (Student3) superPerson4;
        }

    }
}
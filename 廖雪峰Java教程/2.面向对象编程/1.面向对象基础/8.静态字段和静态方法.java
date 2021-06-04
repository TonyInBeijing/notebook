/**
 * 静态字段和静态方法  
 */

/**
 * 静态字段
 * 在一个class中定义的字段，我们称之为实例字段。实例字段的特点是，每个实例都有独立的字段，各个实例的同名字段互不影响。
 * 实例字段在每个实例中都有自己的一个独立“空间”，但是静态字段只有一个共享“空间”，所有实例都会共享该字段。
 */

/**
 * 静态方法 调用实例方法必须通过一个实例变量，而调用静态方法则不需要实例变量，通过类名就可以调用。静态方法类似其它编程语言的函数。
 */

class StaticPerson {
    public String name; // 实例字段
    public int age; // 实例字段
    public static int number; // 静态字段

    public StaticPerson(String name, int age) {
        this.name = name;
        this.age = age;
    }

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

    // 静态方法
    public static void run() {
        System.out.println("run!");
    }
}

class StaticMain {
    public static void main(String[] args) {
        StaticPerson sp1 = new StaticPerson("小明", 12);
        StaticPerson sp2 = new StaticPerson("小红", 13);
        sp1.number = 12;
        System.out.println(sp2.number); // 12
        sp2.number = 13;
        System.out.println(sp1.number); // 13
        StaticPerson.run();
    }
}

/**
 * 接口静态字段
 * 必须是 public static final 类型
 */
interface StaticPersonInterface{
    public static final String NAME = "name";
}

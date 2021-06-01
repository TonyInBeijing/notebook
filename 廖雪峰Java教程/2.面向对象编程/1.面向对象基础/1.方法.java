/**
 * 方法
 */
class Person { // class
    // private 私有字段，拒绝外部访问
    private String[] name; // field
    private int age;

    public String getName() {
        sayHello();
        /**
         * this 变量 在方法内部，可以使用一个隐含的变量this，它始终指向当前实例。 因此，通过this.field就可以访问当前实例的字段
         * 如果没有命名冲突，可以省略this
         */
        return this.name[0] + this.name[1];
    }

    public void setName(String[] name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // private方法在类的内部可以调用
    private void sayHello() {
        System.out.println("Hello!");
    }
}

/**
 * 参数绑定 调用方把参数传递给实例方法时，调用时传递的值会按照参数位置一一绑定 
 * 基本类型参数的传递，是调用方值的复制。双方各自的后续修改，互不影响。
 * 引用类型参数的传递，调用方的变量，和接收方的参数变量，指向的是同一个对象。双方任意一方对这个对象的修改，都会影响对方（因为指向同一个对象嘛）。
 */
class ParamBind {
    public static void main(String[] args) {
        Person p = new Person();
        String[] name = { "小", "明" };
        int age = 15;
        p.setName(name);
        p.setAge(age);
        age = 20;
        name[0] = "大";
        System.out.println(p.getAge()); // 15 不变
        System.out.println(p.getName()); // 大明 改变
    }
}

class Main {
    public static void main(String[] args) {
        Person person = new Person();
        String[] name = { "小", "明" };
        person.setName(name);
        System.out.println(person.getName());
    }
}

/**
 * 构造方法
 */
class Person1 {
    private String name;
    private int age;

    // 多构造方法
    public Person1() {
        this.name = "小红";
        this.age = 13;
        // 也可以这样写
        // this("小红",13);
    }

    public Person1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }
}

class Main1 {
    public static void main(String[] args) {
        Person1 person = new Person1("小明", 12);
        System.out.println(person.getName()); // 小明
        Person1 person1 = new Person1();
        System.out.println(person1.getName()); // 小红
    }
}
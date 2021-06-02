/**
 * 方法重载 
 * 在一个类中，可以定义多个方法，如果有一些方法功能都是类似的，只有参数有所不同，可以称这一类方法为同名方法。 
 * 方法重载的返回值类型通常都是相同的
 */
class Hello {
    public void hello() {
        System.out.print("Hello!");
    }

    public void hello(String name) {
        System.out.println("Hello" + name);
    }

    public void hello(String name, int age) {
        System.out.println("Hello" + name + age);
    }
}
/**
 * 方法重载的目的是，功能类似的方法使用同一名字，更容易记住，因此，调用起来更简单。
 */
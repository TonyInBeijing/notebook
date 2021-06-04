/**
 * 内部类
 */
class Outer {
    private String name;

    public Outer(String name) {
        this.name = name;
    }

    class Inner {
        void hello() {
            System.out.println("hello");
        }
    }
}

class InnerMain {
    public static void main(String[] args) {
        Outer outer = new Outer("xiaoming");
        // 实例化一个内部类
        Outer.Inner inner = outer.new Inner();
        inner.hello();

        AnonymousOuter anonymousOuter = new AnonymousOuter("xiaohong");
        anonymousOuter.asyncHello();

        StaticOuter.StaticNested ss  =  new StaticOuter.StaticNested();
        ss.hello();
    }
}
// TODO InnerClass和普通Class相比，除了能引用Outer实例外，还有一个额外的“特权”，就是可以修改OuterClass的private字段，因为InnerClass的作用域在Outer Class内部，所以能访问OuterClass的private字段和方法。

// Anonymous Class 匿名类
class AnonymousOuter {
    private String name;

    public AnonymousOuter(String name) {
        this.name = name;
    }

    void asyncHello() {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println("Run");
            }
        };
        new Thread(r).start();
    }
}

// TODO: 匿名类和Inner Class一样，可以访问Outer Class的private字段和方法。之所以我们要定义匿名类，是因为在这里我们通常不关心类名，比直接定义Inner Class可以少写很多代码。

// Static Nested Class
class StaticOuter{
    private static String NAME = "OUTER";
    private String name;
    public StaticOuter(String name){
        this.name = name;
    };
    static class StaticNested{
        void hello(){
            System.out.println("hello");
        }
    }
}

// TODO:用static修饰的内部类和Inner Class有很大的不同，它不再依附于Outer的实例，而是一个完全独立的类，因此无法引用Outer.this，但它可以访问Outer的private静态字段和静态方法。如果把StaticNested移到Outer之外，就失去了访问private的权限。
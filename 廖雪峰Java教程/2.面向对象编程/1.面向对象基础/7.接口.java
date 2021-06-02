/**
 * 接口 在抽象类中，抽象方法本质上是定义接口规范：即规定高层类的接口，从而保证所有子类都有相同的接口实现，这样，多态就能发挥出威力。
 */
interface PersonInterface {
    void run();

    String getName();
}

// 当一个具体的class去实现一个interface时，需要使用implements关键字。
class PersonImpl implements PersonInterface {
    private String name;

    public PersonImpl(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println("PersonImple.run");
    }

    @Override
    public String getName() {
        return this.name;
    }

}

/**
 * 接口继承 接口可以继承另一个接口
 */
interface StudentInterface extends PersonInterface {
    /**
     * default方法的目的是，当我们需要给接口新增一个方法时，会涉及到修改全部子类。如果新增的是default方法，那么子类就不必全部修改，只需要在需要覆写的地方去覆写新增方法。
     */
    default void study() {
        System.out.println("Student.study");
    }
}

class StudentImpl implements StudentInterface {
    private String name;

    public StudentImpl(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        System.out.println("Student.run");
    }

    @Override
    public String getName() {
        return this.name;
    }
}

class InterfaceMain {
    public static void main(String[] args) {
        StudentImpl studentImpl = new StudentImpl("小红");
        studentImpl.study();
    }
}

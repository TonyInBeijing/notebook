/**
 * 多态 在继承关系中，子类如果定义了一个与父类方法签名完全相同的方法，被称为覆写（Override）。
 * Override和Overload不同的是，如果方法签名如果不同，就是Overload，Overload方法是一个新方法；如果方法签名相同，并且返回值也相同，就是Override。
 */

class PersonOverride {
    public void run() {
        System.out.println("run");
    }
}

class StudentOverride extends PersonOverride {
    @Override
    public void run() {
        System.out.println("Student.run");
    }
}

class MainOverride {
    public static void main(String[] args) {
        PersonOverride p = new StudentOverride();
        p.run(); // Student.run
        // Java的实例方法调用是基于运行时的实际类型的动态调用，而非变量的声明类型。
    }

}

/**
 * 多态 多态是指，针对某个类型的方法调用，其真正执行的方法取决于运行时期实际类型的方法。
 */

// 收入类
class Income {
    protected double income;

    public Income(double income) {
        this.income = income;
    }

    public double getTax() {
        return income * 0.1; // 收入缴税0.1
    }
}

// 工资收入
class Salary extends Income {
    public Salary(double income) {
        super(income);
    }

    @Override
    public double getTax() {
        if (income < 5000) {
            return 0;
        }
        return (income - 5000) * 0.2;
    }
}

// 额外收入
class ExtraIncome extends Income {
    public ExtraIncome(double income) {
        super(income);
    }

    @Override
    public double getTax() {
        return 0;
    }

}

class TaxMain {
    public static void main(String[] args) {
        Income[] incomes = new Income[] { new Income(3000), new Salary(7500), new ExtraIncome(10000) };
        System.out.println(totalTax(incomes));
    }

    private static double totalTax(Income... incomes) {
        double total = 0;
        for (Income income : incomes) {
            total = total + income.getTax();
        }
        return total;
    }
}

// final 修饰的类，字段，方法不能被复写
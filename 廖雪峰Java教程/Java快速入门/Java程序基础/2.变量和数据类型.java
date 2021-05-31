/**
 * 整型 int 对于整型类型，Java只定义了带符号的整型，因此，最高位的bit表示符号位（0表示正数，1表示负数）。各种整型能表示的最大范围如下：
 * byte：-128 ~ 127 short: -32768 ~ 32767 int: -2147483648 ~ 2147483647 long:
 * -9223372036854775808 ~ 9223372036854775807
 */
class Main {
    public static void main(String[] args) {
        int i = 2147483647;
        int i2 = -2147483647;
        int i3 = 2_000_000_000; // 加下划线更容易识别
        int i4 = 0xff0000; // 十六进制表示的16711680
        int i5 = 0b1000000000; // 二进制表示的512
        long i6 = 9000000000000000000L; // long类型的结尾需要加L
        System.out.println(i);
    }
}
/**
 * 浮点型
 * 浮点类型的数就是小数，因为小数用科学计数法表示的时候，小数点是可以“浮动”的，如1234.5可以表示成12.345x102，也可以表示成1.2345x103，所以称为浮点数。
 * e.g
 * float f1 = 3.14f
 * float f2 = 3.14e38f
 * double d = 1.79e308
 * double d2 = -1.79e308
 * double d3 = 4.9e-324
 * 
 * 对于float类型需要加上f后缀
 * 浮点数可表示的范围非常大，float类型可最大表示3.4x1038，而double类型可最大表示1.79x10308。
 */
class Main2{
    public static void main(String[] args){
        float f1 = 3.14f;
        System.out.println(f1);
    }
}
/**
 * 布尔类型
 * 布尔类型 boolean只有true和false两个值，布尔类型总是关系运算符的计算结果
 */
class Main3{
    public static void main(String[] args){
        boolean b1 = true;
        boolean b2 = false;
        boolean isGreater = 5 > 3;
        int age = 25;
        boolean isAdult = age >= 18;
    }
}
/**
 * 字符类型
 * 字符类型char表示一个字符。Java的char类型除了可表示标准的ASCII以外，还可以表示一个Unicode字符
 */
class Main4{
    public static void main(String[] args){
        char a = 'A';
        char zh = '中';
        System.out.println(a);
        System.out.println(zh);
    }
}
/**
 * 引用类型
 * 除了上述基本类型变量，剩下的基本都是引用类型。
 * 例如，最常用的是String字符串
 */
class Main5{
    public static void main(String[] args){
        String string = "String";
        System.out.println(string);
    }
}
/**
 * 常量
 * 定义变量的时候，如果加上final修饰符，这个变量就变成了常量
 */
class Main6{
    public static void main(String[] args){
        final double PI = 3.14;
        double r = 5.6;
        double area = PI * r * r;
        
    }
}
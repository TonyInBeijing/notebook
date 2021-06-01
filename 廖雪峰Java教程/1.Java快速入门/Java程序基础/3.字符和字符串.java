/**
 * 字符和字符串
 * Java中字符和字符串是两个不同的类型
 */

/**
 * 字符类型char是基本数据类型，它是character的缩写。一个cahr保存一个Unicode字符
 * Java在内存中总是使用Unicode表示字符，所以，一个英文字符和一个中文字符都用一个char类型表示，都占2个字节。
 * 要现实一个字符的Unicode编码，只需要将char类型直接赋值给int就行
 */
class MyChar {
    public static void main(String[] args) {
        char c1 = 'A';
        char c2 = '中';
        int unicode_c1 = 'A';
        int unicode_c2 = '中';
        System.out.println(unicode_c1);
        // 还可以直接使用转义字符 Unicode 编码来表示字符
        char c3 = '\u0041';
        System.out.println(c3);
    }
}

/**
 * 跟char类型不同，String是引用类型，我们用双引号"..."表示字符串 一个字符串可以存储0个到任意个字符
 */
class MyString {
    public static void main(String[] args) {
        String s = ""; // 空字符串，包含0个字符
        String s1 = "s"; // 1个字符
        String s2 = "abc\"xyz\\"; // 包含"的使用\转义
        String s3 = null; // 空值，跟空字符串""不同
        System.out.println(s2); // abc"xyz\
        /**
         * 常见的转义字符： \n 表示换行符 \r 表示回车符 \t 表示tab
         */

        // 字符串连接
        // 使用 + 连接任意字符串和其他数据类型，这样极大的方便了字符串的处理
        System.out.println(s + s1 + s2 + 3);

        /**
         * 多行字符串 使用"""表示多行字符串,从Java13开始
         */

    }
}

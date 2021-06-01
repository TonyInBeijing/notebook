
/**
 * 数组操作
 */

/**
 * 遍历数组
 */

import java.util.Arrays;

class MapArr {
    public static void main(String[] args) {
        int[] ns = { 1, 4, 9, 16, 25 };
        for (int i = 0; i < ns.length; i++) { // i为数组索引
            int n = ns[i];
            System.out.println(n);
        }
        for (int n : ns) { // n 为数组每一项
            System.out.println(n);
        }
        // 打印完整数组
        System.out.println(Arrays.toString(ns));
        // 倒序输出数组元素
        // 倒序打印数组元素:
        for (int i = ns.length - 1; i > 0; i--) {
            System.out.println(ns[i]);
        }
    }
}

/**
 * 数组排序
 */
class SortArr {
    public static void main(String[] args) {
        int[] ns = { 28, 12, 89, 73, 65, 18, 96, 50, 8, 36 };
        // 排序前
        System.out.println(Arrays.toString(ns));
        for (int i = 0; i < ns.length - 1; i++) { // 最后一次循环把最小的和第二小的都排序
            for (int j = 0; j < ns.length - i - 1; j++) { // - i 是每一次循环都可以把剩下的最大的排除
                if (ns[j] > ns[j + 1]) {
                    int temp = ns[j];
                    ns[j] = ns[j + 1];
                    ns[j + 1] = temp;
                }
            }
        }
        // 排序后
        System.out.println(Arrays.toString(ns));

        // 使用JDK方法
        Arrays.sort(ns);
        System.out.println(Arrays.toString(ns));

        // 降序排序

        for (int i = 0; i < ns.length - 1; i++) {
            for (int j = 0; j < ns.length - 1 - i; j++) {
                if (ns[j] < ns[j + 1]) {
                    int temp = ns[j];
                    ns[j] = ns[j + 1];
                    ns[j + 1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(ns));
    }
}
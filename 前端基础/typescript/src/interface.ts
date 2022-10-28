/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-26 21:28:46
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-26 21:38:37
 * @FilePath: /notebook/playground/src/interface.ts
 * @Description: 
 * 
 */


// TODO: 字面量类型&联合类型
interface Tmp {
    user: | {
        vip: true;
        expires: string;
    } | {
        vip: false;
        promotion: string;
    }
}

declare var tmp: Tmp;

if (tmp.user.vip) {
    console.log(tmp.user.expires);
}


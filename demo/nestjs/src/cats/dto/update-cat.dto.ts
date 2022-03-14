import internal from "stream";

/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 15:35:10
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 15:54:18
 * @FilePath: \notebook\demo\nestjs\src\dto\cat\update-cat.dto.ts
 * @Description: 
 * 
 */
export default class updateCatDto{
    readonly name: string;
    readonly age: number;
    readonly breed: string
}

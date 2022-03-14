/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 15:29:38
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 15:38:31
 * @FilePath: \notebook\demo\nestjs\src\dto\cat\create-cat.dto.ts
 * @Description: 
 * 
 */

export default class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string
};

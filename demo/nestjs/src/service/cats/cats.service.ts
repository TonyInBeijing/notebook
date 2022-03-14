/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 16:19:22
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 17:07:28
 * @FilePath: \notebook\demo\nestjs\src\service\cats\cats.service.ts
 * @Description: 
 * 
 */

import { Injectable } from "@nestjs/common";
import Cat from "src/interfaces/cats/cat.interface";
@Injectable()
export default class CatsService {
    private readonly cats: Cat[] = [];
    create(cat: Cat) {
        this.cats.push(cat);
    };
    findAll(): Cat[] {
        return this.cats;
    }
}

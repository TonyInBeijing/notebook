/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 16:19:22
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 20:08:12
 * @FilePath: /notebook/demo/nestjs/src/cats/cats.service.ts
 * @Description: 
 * 
 */

import { Injectable } from "@nestjs/common";
import Cat from "src/cats/interfaces/cat.interface";
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

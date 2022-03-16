/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 20:00:10
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 10:51:53
 * @FilePath: \notebook\demo\nestjs\src\cats\cats.module.ts
 * @Description: 
 * 
 */

import { Module } from "@nestjs/common";
import CatsController from "src/cats/cats.controller";
import CatsService from "src/cats/cats.service";

@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export default class CatsModule {
    constructor(private readonly catsService: CatsService) { }
};
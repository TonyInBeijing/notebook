/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 14:23:20
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 15:16:46
 * @FilePath: \notebook\demo\nestjs\src\dogs\dogs.module.ts
 * @Description: 
 * 
 */

import { Module } from "@nestjs/common";
import DogsController from "./dogs.controller";
import DogsService from "./dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogsService]
})
export default class DogModule {
    
}

/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 14:23:06
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 14:38:59
 * @FilePath: \notebook\demo\nestjs\src\dogs\dogs.controller.ts
 * @Description: 
 * 
 */

import { Controller, Get } from "@nestjs/common";
import CatsService from "src/cats/cats.service";
import DogsService from "./dogs.service";


@Controller("dogs")
export default class DogsController {
    constructor(private readonly dogsService: DogsService){}
    @Get()
    async findAll():Promise<string>{
        console.log("receive request!");
        return this.dogsService.findAll();
    }
}
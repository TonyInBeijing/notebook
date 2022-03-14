/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:28:57
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 17:07:24
 * @FilePath: \notebook\demo\nestjs\src\controller\cats.controller.ts
 * @Description: 
 * 
 */

import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import CreateCatDto from "src/dto/cats/create-cat.dto";
import UpdateCatDto from "src/dto/cats/update-cat.dto";
import ListAllEntities from "src/dto/cats/list-all-entities.dto";

import CatsService from "src/service/cats/cats.service";
import Cat from "src/interfaces/cats/cat.interface";

@Controller("cats")
export default class CatsController {
    constructor(private readonly catsService: CatsService) { }
    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catsService.findAll();
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<void> {
        this.catsService.create(createCatDto);
    }
    @Get(":id")
    findOne(@Param("id") id: string): string {
        return `This action returns a ${id} cat`;
    }
    @Put(":id")
    update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a ${id} cat`;
    }
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `This action removes a ${id} cat`;
    }
};

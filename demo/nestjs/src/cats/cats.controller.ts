/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:28:57
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-20 17:41:00
 * @FilePath: /notebook/demo/nestjs/src/cats/cats.controller.ts
 * @Description: 
 * 
 */

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseFilters, UseGuards } from "@nestjs/common";
import CreateCatDto from "src/cats/dto/create-cat.dto";
import UpdateCatDto from "./dto/update-cat.dto";
import ListAllEntities from "./dto/list-all-entities.dto";

import CatsService from "src/cats/cats.service";
import Cat from "src/cats/interfaces/cat.interface";

import HttpExceptionFilter from "src/common/filters/http-exception.filter";
import RoleGuard from "src/common/guards/role.guard";

@Controller("cats")
// @UseFilters(HttpExceptionFilter) -- 控制器级别过滤器
@UseGuards(RoleGuard)
export default class CatsController {
    constructor(private readonly catsService: CatsService) { }
    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
        return this.catsService.findAll();
    }
    @Post()
    @UseFilters(HttpExceptionFilter) // 路由层面过滤器
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

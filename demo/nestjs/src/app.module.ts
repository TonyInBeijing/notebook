/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:21:29
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 17:07:40
 * @FilePath: \notebook\demo\nestjs\src\app.module.ts
 * @Description: 
 * 
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CatsController from './controller/cats.controller';
import CatsService from './service/cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule { }

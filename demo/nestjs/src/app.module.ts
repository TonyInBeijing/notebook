/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:21:29
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-14 20:08:14
 * @FilePath: /notebook/demo/nestjs/src/app.module.ts
 * @Description: 
 * 
 */
import { Module } from '@nestjs/common';
import CatsModule from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule { }

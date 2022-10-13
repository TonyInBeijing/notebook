/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:21:29
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 16:15:20
 * @FilePath: \notebook\demo\nestjs\src\app.module.ts
 * @Description: 
 * 
 */
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';

import Logger from './common/middlewares/logger.middleware';
import DataModule from './data/data.module';
@Module({
  imports: [DataModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes("cats")
  }
}

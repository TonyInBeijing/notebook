/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-14 14:21:29
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 15:38:08
 * @FilePath: \notebook\demo\nestjs\src\app.module.ts
 * @Description: 
 * 
 */
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import CatsModule from './cats/cats.module';
import DogModule from './dogs/dogs.module';

import Logger from './common/middlewares/logger.middleware';
@Module({
  imports: [CatsModule, DogModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes("cats")
  }
}

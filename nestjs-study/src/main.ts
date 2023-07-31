/*
 * @Author: TonyInBeijing
 * @Date: 2023-06-05 16:33:01
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2023-06-06 10:19:48
 * @FilePath: /notebook/nestjs-study/src/main.ts
 * @Description: 
 * 
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"), { prefix: "/static" }) // 配置静态资源访问
  await app.listen(3000);
}
bootstrap();

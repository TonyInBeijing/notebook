/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-17 09:10:23
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-17 14:08:15
 * @FilePath: \notebook\demo\nestjs\src\common\pipes\validate.pipe.ts
 * @Description: 
 * 
 */

import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export default class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        return value;
    }
}
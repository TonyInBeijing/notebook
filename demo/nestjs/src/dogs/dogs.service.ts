/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 14:24:32
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 14:30:12
 * @FilePath: \notebook\demo\nestjs\src\dogs\dogs.service.ts
 * @Description: 
 * 
 */

import { Injectable } from "@nestjs/common";

@Injectable()
export default class DogsService {
    findAll = async (): Promise<string> => {
        return "";
    }
}
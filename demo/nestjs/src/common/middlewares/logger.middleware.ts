/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 15:32:01
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 15:38:00
 * @FilePath: \notebook\demo\nestjs\src\common\middlewares\logger.middleware.ts
 * @Description: 
 * 
 */

export default function Logger(req: any, res: any, next: () => void): void {
    console.log("Request Comming::");
    console.log(req);
    console.log(res);
    next();
}
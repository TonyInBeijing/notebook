/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-20 17:02:10
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-20 17:39:08
 * @FilePath: /notebook/demo/nestjs/src/common/guards/role.guard.ts
 * @Description: 
 * 
 */

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export default class RoleGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        return true;
    }
}

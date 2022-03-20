/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-20 16:41:07
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-20 17:01:56
 * @FilePath: /notebook/demo/nestjs/src/common/guards/auth.guard.ts
 * @Description: 
 * 
 */

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

const validateRequest = (request: any): boolean => true;

@Injectable()
export default class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return validateRequest(request);
    }
}


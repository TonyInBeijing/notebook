/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 16:02:16
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 16:08:24
 * @FilePath: \notebook\demo\nestjs\src\common\filters\http-exception.filter.ts
 * @Description: 
 * 
 */

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export default class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
}
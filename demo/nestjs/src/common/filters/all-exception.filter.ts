/*
 * @Author: TonyInBeijing
 * @Date: 2022-03-16 16:39:37
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-03-16 16:47:12
 * @FilePath: \notebook\demo\nestjs\src\common\filters\all-exception.filter.ts
 * @Description: 
 * 
 */

import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export default class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
}

// 继承基础过滤器

@Catch()
class AllExceptionsFilter1 extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        super.catch(exception, host);
    }
}
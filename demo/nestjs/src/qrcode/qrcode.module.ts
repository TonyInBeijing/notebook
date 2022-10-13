/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-13 14:42:42
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 15:41:01
 * @FilePath: \notebook\demo\nestjs\src\qrcode\qrcode.module.ts
 * @Description: 扫码登录模块
 * 
 */
import { Module } from "@nestjs/common";
import QrcodeController from "./qrcode.controller";
import QrcodeService from "./qrcode.service";

@Module({
    controllers: [QrcodeController],
    providers: [QrcodeService]
})
export default class QrcodeModule {

}
/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-13 14:42:13
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 16:21:48
 * @FilePath: \notebook\demo\nestjs\src\qrcode\qrcode.service.ts
 * @Description: 扫码登录服务
 * 
 */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Sequelize } from "sequelize-typescript";
import QrCodeFil from "./models/qrcode.model";

@Injectable()
export default class QrcodeService {
    constructor(
        private readonly sequelize: Sequelize,
        @InjectModel(QrCodeFil) private readonly qrCodeFil: typeof QrCodeFil
    ) { }
}
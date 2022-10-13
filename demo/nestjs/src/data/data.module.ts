/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-13 15:45:37
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 16:19:19
 * @FilePath: \notebook\demo\nestjs\src\data\data.module.ts
 * @Description: 数据库配置文件
 * 
 */
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import commonConfig from "src/config/common.config";
import QrCodeFil from "src/qrcode/models/qrcode.model";

const {
    host,
    port,
    userName,
    password,
    database
} = commonConfig.MYSQL_CONFIG;

@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect: "mysql",
            host: host,
            port: port,
            username: userName,
            password: password,
            database: database,
            timezone: "+08:00",
            dialectOptions: {
                dateStrings: true,
                typeCast: true
            },
            models: [
                QrCodeFil
            ]
        })
    ]
})
export default class DataModule {

}
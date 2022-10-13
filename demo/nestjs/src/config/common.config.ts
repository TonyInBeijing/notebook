/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-13 15:50:35
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 16:07:33
 * @FilePath: \notebook\demo\nestjs\src\config\common.config.ts
 * @Description: 项目配置文件
 * 
 */
class CommonConfig {
    readonly PORT = 8080;
    readonly API_PREFIX = "api/v1";
    readonly MYSQL_CONFIG = {
        host: "42.193.102.38",
        port: 33861,
        database: "qrcode",
        userName: "root",
        password: "root",
    };
}

export default new CommonConfig();
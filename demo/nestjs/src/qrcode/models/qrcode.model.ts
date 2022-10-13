/*
 * @Author: TonyInBeijing
 * @Date: 2022-10-13 16:16:06
 * @LastEditors: TonyInBeijing
 * @LastEditTime: 2022-10-13 16:19:07
 * @FilePath: \notebook\demo\nestjs\src\qrcode\models\qrcode.model.ts
 * @Description: qrcode_fil表结构
 * 
 */
import { Model, PrimaryKey, Column, Table, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: "qrcode_fil",
    timestamps: false
})
export default class QrCodeFil extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    qrcode_id: string;

    @Column
    qrcode_status: string;
}
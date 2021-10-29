import { IModel } from "src/app/states-and-services/models/i.model";

export interface IAttendanceModel extends IModel {

    // id: number | string | undefined exists in IModel
    employee: number
    loginDateTime: Date
    logoutDateTime: Date
    loginDescription: string
    logoutDescription: string
    remark: string

}
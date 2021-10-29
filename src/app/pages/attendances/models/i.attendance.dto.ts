import { IDto } from "src/app/states-and-services/models/i.dto";

export interface IAttendanceDto extends IDto {

    // id: number | string | undefined exists in IDto
    employee: number
    loginDateTime: number
    logoutDateTime: number
    loginDescription: string
    logoutDescription: string
    remark: string

}
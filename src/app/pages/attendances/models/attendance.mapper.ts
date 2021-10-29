import { IMapper } from "src/app/states-and-services/models/i.mapper";
import { IAttendanceDto } from "./i.attendance.dto";
import { IAttendanceModel } from "./i.attendance.model";

const timeOffset: number = (new Date()).getTimezoneOffset() * 60000

export class AttendanceMapper extends IMapper<IAttendanceDto, IAttendanceModel> {

    public override toModel(source: IAttendanceDto): IAttendanceModel {
        return {
            id: source.id,
            employee: source.employee,
            loginDateTime: (new Date(source.loginDateTime + timeOffset)),
            logoutDateTime: (new Date(source.logoutDateTime + timeOffset)),
            loginDescription: source.loginDescription,
            logoutDescription: source.logoutDescription,
            remark: source.remark
        } as IAttendanceModel
    }

    public override toDto(source: IAttendanceModel): IAttendanceDto {
        return {
            id: source.id,
            employee: source.employee,
            loginDateTime: source.loginDateTime.getTime() - timeOffset,
            logoutDateTime: source.logoutDateTime.getTime() - timeOffset,
            loginDescription: source.loginDescription,
            logoutDescription: source.logoutDescription,
            remark: source.remark
        } as IAttendanceDto
    }

}
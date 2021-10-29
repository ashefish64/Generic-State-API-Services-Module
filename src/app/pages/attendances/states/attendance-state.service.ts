import { Injectable } from '@angular/core';
import { BasicStateService } from 'src/app/states-and-services/states/basic.state.service';
import { AttendanceMapper } from '../models/attendance.mapper';
import { IAttendanceDto } from '../models/i.attendance.dto';
import { IAttendanceModel } from '../models/i.attendance.model';
import { IAttendanceStateModel } from '../models/i.attendance.state.model';
import { AttendanceService } from '../services/attendance.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceStateService extends BasicStateService<IAttendanceModel, IAttendanceDto, AttendanceMapper, AttendanceService, IAttendanceStateModel>  {

  employees: {id: number, name: string}[] = [
    { id: 1, name: 'Amanuel'},
    { id: 2, name: 'Ashenafi'},
    { id: 3, name: 'Yaschalew'},
    { id: 4, name: 'Yosef'}
  ]
  
  constructor(
    attendanceService: AttendanceService
  ) {
    super(attendanceService);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicApiBaseService } from 'src/app/states-and-services/services/basic.api.service';
import { AttendanceMapper } from '../models/attendance.mapper';
import { IAttendanceDto } from '../models/i.attendance.dto';
import { IAttendanceModel } from '../models/i.attendance.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService extends BasicApiBaseService<IAttendanceDto, IAttendanceModel, AttendanceMapper> {

  constructor(
    _httpClient: HttpClient
  ) {
    super(
      _httpClient,
      'http://localhost:4201/attendances',
      { 'headers': new HttpHeaders({
        'Content-Type': 'application/json'
      })},
      new AttendanceMapper())
  }
}

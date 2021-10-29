import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAttendanceModel } from '../../models/i.attendance.model';
import { AttendanceStateService } from '../../states/attendance-state.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  attendances$: Observable<IAttendanceModel[]>
  attendances: IAttendanceModel[] = []

  constructor(
    private readonly _router: Router,
    private readonly _attendanceStateService: AttendanceStateService
  ) {
    this.attendances$ = this._attendanceStateService.allObjects$
  }

  ngOnInit(): void {
    this.attendances$.subscribe((response: IAttendanceModel[]) => {
      this.attendances = response
    })
  }

  onAdd() {
    this._attendanceStateService.selected = undefined
    this._router.navigateByUrl('/attendance/add')
  }

  onDetail(id: number | string | undefined) {
    this._attendanceStateService.selected = id
    this._router.navigateByUrl('/attendance/detail')
  }

  onEdit(id: number | string | undefined) {
    this._attendanceStateService.selected = id
    this._router.navigateByUrl('/attendance/edit')
  }

  onDelete(id: number | string | undefined) {
    this._attendanceStateService.selected = id
    this._router.navigateByUrl('/attendance/delete')
  }

}

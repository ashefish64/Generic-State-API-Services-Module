import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAttendanceModel } from '../../models/i.attendance.model';
import { AttendanceStateService } from '../../states/attendance-state.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup

  employees: {id: number, name: string}[] = []
  attendance: IAttendanceModel = {} as IAttendanceModel

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _attendanceStateService: AttendanceStateService
  ) {
    this.form = this._formBuilder.group({
      employee: '',
      loginDateTime: '',
      loginDescription: '',
      logoutDateTime: '',
      logoutDescription: '',
      remark: ''
    })
  }

  ngOnInit(): void {
    // this.employees = this._attendanceStateService.employees
    // this._attendanceStateService.selectedObject$
    // .subscribe((item: IAttendanceModel) => {
    //   this.form = this._formBuilder.group({
    //     employee: item.employee,
    //     loginDateTime: item.loginDateTime,
    //     loginDescription: item.loginDescription,
    //     logoutDateTime: item.logoutDateTime,
    //     logoutDescription: item.logoutDescription,
    //     remark: item.remark
    //   })

      
    // })
  }

  onSave() {
    console.log(this.form.value)
  }

  onDiscard() {

  }

}

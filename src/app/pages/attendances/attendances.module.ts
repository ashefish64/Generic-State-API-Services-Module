import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancesRoutingModule } from './attendances-routing.module';
import { AttendancesComponent } from './attendances.component';
import { ListComponent } from './components/list/list.component';
import { StatesAndServicesModule } from 'src/app/states-and-services/states-and-services.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AttendancesComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    AttendancesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StatesAndServicesModule,
    HttpClientModule,
    IconsProviderModule,
    DemoNgZorroAntdModule,
  ]
})
export class AttendancesModule { }

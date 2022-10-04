import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    AdminDashboardComponent,
    LaunchpageComponent,
    VisaupdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }

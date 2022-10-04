import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { AmdpageComponent } from './amdpage/amdpage.component';
import { PayrollexpensesComponent } from './payrollexpenses/payrollexpenses.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { EmpexpdetailsComponent } from './empexpdetails/empexpdetails.component';
import { OperationalCostComponent } from './operational-cost/operational-cost.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    AdminDashboardComponent,
    LaunchpageComponent,
    VisaupdateComponent,
    OrganizationdataComponent,
    PendingrequestComponent,
    ViewdetailsComponent,
    LdbpageComponent,
    ReceivablesComponent,
    PersonaldataComponent,
    AmdpageComponent,
    PayrollexpensesComponent,
    UpdatedataComponent,
    EmpexpdetailsComponent,
    OperationalCostComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }

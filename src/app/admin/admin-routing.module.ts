import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AmdpageComponent } from './amdpage/amdpage.component';
import { DepartmentComponent } from './department/department.component';
import { EducationUpdateComponent } from './education-update/education-update.component';
import { EmpexpdetailsComponent } from './empexpdetails/empexpdetails.component';
import { EmployeeExpensedataComponent } from './employee-expensedata/employee-expensedata.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { LdbpageComponent } from './ldbpage/ldbpage.component';
import { ManagementExpensesComponent } from './management-expenses/management-expenses.component';
import { NewempComponent } from './newemp/newemp.component';
import { OperationalCostComponent } from './operational-cost/operational-cost.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PayrollexpensesComponent } from './payrollexpenses/payrollexpenses.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { VisaupdateComponent } from './visaupdate/visaupdate.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'launchpage', component: LaunchpageComponent },
  { path: 'orgdata', component: OrganizationdataComponent },
  { path: 'pendingrequest', component: PendingrequestComponent },
  { path: 'education-update', component: EducationUpdateComponent },
  { path: 'visaupdate', component: VisaupdateComponent },
  { path: 'viewdetails', component: ViewdetailsComponent },
  { path: 'ldbpage', component: LdbpageComponent },
  { path: 'receivables', component: ReceivablesComponent },
  { path: 'personaldata', component: PersonaldataComponent },
  { path: 'amdpage', component: AmdpageComponent },
  { path: 'payrollexpenses', component: PayrollexpensesComponent },
  { path: 'updatedetails', component: UpdatedataComponent },
  { path: 'empexpdetails', component: EmpexpdetailsComponent },
  { path: 'operationalcost', component: OperationalCostComponent },
  { path: 'employeeexpensedata', component: EmployeeExpensedataComponent },
  { path: 'userdata', component: UserdataComponent },
  { path: 'JobUpdate', component: JobUpdateComponent },
  {path:'managementexpenses',component:ManagementExpensesComponent},
  {path:'newemp',component:NewempComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

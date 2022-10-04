import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { LaunchpageComponent } from './launchpage/launchpage.component';
import { OrganizationdataComponent } from './organizationdata/organizationdata.component';
import { PendingrequestComponent } from './pendingrequest/pendingrequest.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'launchpage', component: LaunchpageComponent },
  { path: 'orgdata', component: OrganizationdataComponent},
  { path:'pendingrequest',component:PendingrequestComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { ADMIN_ROUTES } from './routing/admin-routing';
import { AUTHENTICATION_ROUTES } from './routing/authentication-routing';
import { AmdbuttonsComponent } from './shared/amdbuttons/amdbuttons.component';

const routes: Routes = [
  { path: '', component: AuthenticationLayoutComponent, children: AUTHENTICATION_ROUTES },
  { path: '', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  { path: 'admin', component: AdminLayoutComponent, children: ADMIN_ROUTES },
  { path: 'amdbuttons', component: AmdbuttonsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

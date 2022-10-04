import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { RegistrationpageComponent } from './Authentication/registrationpage/registrationpage.component';
import { LoginComponent } from './Authentication/login/login.component';
import { EducationUpdateComponent } from './admin/education-update/education-update.component';

import { LdbpageComponent } from './admin/ldbpage/ldbpage.component';
import { ReceivablesComponent } from './admin/receivables/receivables.component';
import { ForgetpasswordComponent } from './Authentication/forgetpassword/forgetpassword.component';
import { VisaupdateComponent } from './admin/visaupdate/visaupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    AdminLayoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

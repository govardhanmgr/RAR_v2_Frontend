import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { RegistrationpageComponent } from './Authentication/registrationpage/registrationpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdataComponent } from './admin/userdata/userdata.component';
import { EmployeeExpensedataComponent } from './admin/employee-expensedata/employee-expensedata.component';

@NgModule({
  declarations: [
    AppComponent,
    PenrequestComponent,
    ViewDetailsComponent,
    RegistrationpageComponent,
    UserdataComponent,
    EmployeeExpensedataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { LdbpageComponent } from './admin/ldbpage/ldbpage.component';
import { ReceivablesComponent } from './admin/receivables/receivables.component';

import { VisaupdateComponent } from './admin/visaupdate/visaupdate.component';
import { ForgetpasswordComponent } from './authentication/forgetpassword/forgetpassword.component';
import { RegistrationpageComponent } from './authentication/registrationpage/registrationpage.component';


@NgModule({
  declarations: [
    AppComponent,
    PenrequestComponent,
    ViewDetailsComponent,
    LdbpageComponent,
    ReceivablesComponent,
    ForgetpasswordComponent,
    RegistrationpageComponent,
    VisaupdateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { RegistrationpageComponent } from './Authentication/registrationpage/registrationpage.component';
<<<<<<< HEAD
import { ReportpageComponent } from './reportpage/reportpage.component';
import { UpdatedataComponent } from './admin/updatedata/updatedata.component';
import { EmpexpdetailsComponent } from './admin/empexpdetails/empexpdetails.component';
=======
import { LdbpageComponent } from './admin/ldbpage/ldbpage.component';
import { ReceivablesComponent } from './admin/receivables/receivables.component';
import { ForgetpasswordComponent } from './Authentication/forgetpassword/forgetpassword.component';
import { VisaupdateComponent } from './admin/visaupdate/visaupdate.component';
>>>>>>> 3e2395963f4d768efae17f75c50f25155ebf1e24

@NgModule({
  declarations: [
    AppComponent,
    PenrequestComponent,
    ViewDetailsComponent,
    RegistrationpageComponent,
<<<<<<< HEAD
    ReportpageComponent,
UpdatedataComponent,
EmpexpdetailsComponent,
    
=======
    LdbpageComponent,
    ReceivablesComponent,
    ForgetpasswordComponent,
    VisaupdateComponent
>>>>>>> 3e2395963f4d768efae17f75c50f25155ebf1e24

  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
   AppRoutingModule

    
=======
    AppRoutingModule,
   

>>>>>>> 3e2395963f4d768efae17f75c50f25155ebf1e24
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

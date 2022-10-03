import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { RegistrationpageComponent } from './Authentication/registrationpage/registrationpage.component';
import { ReportpageComponent } from './reportpage/reportpage.component';

@NgModule({
  declarations: [
    AppComponent,
    PenrequestComponent,
    ViewDetailsComponent,
    RegistrationpageComponent,
    ReportpageComponent,
    

  ],
  imports: [
    BrowserModule,
   AppRoutingModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

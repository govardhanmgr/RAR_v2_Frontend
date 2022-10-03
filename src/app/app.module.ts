import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { PenrequestComponent } from './admin/penrequest/penrequest.component';
import { RegistrationpageComponent } from './Authentication/registrationpage/registrationpage.component';
import { LdbpageComponent } from './admin/ldbpage/ldbpage.component';
import { ReceivablesComponent } from './admin/receivables/receivables.component';

@NgModule({
  declarations: [
    AppComponent,
    PenrequestComponent,
    ViewDetailsComponent,
    RegistrationpageComponent,
    LdbpageComponent,
    ReceivablesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

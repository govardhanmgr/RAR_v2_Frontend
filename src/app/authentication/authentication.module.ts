import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';
import { RegistrationPageTwoComponent } from './registration-page-two/registration-page-two.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,

    RegistrationPageThreeComponent,

    ForgotpasswordComponent,
      SecurityquestionsComponent,
      RegistrationPageTwoComponent

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

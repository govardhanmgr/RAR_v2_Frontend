import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RegistrationPageThreeComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }

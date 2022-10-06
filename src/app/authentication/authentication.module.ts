import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';





import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';
import { RegistrationPageTwoComponent } from './registration-page-two/registration-page-two.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,

    RegistrationPageThreeComponent,

    ForgotpasswordComponent,
      SecurityquestionsComponent,
      RegistrationPageTwoComponent,
      ResetpasswordComponent

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule

  ]
})
export class AuthenticationModule { }

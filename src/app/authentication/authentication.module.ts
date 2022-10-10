import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { RegistrationPageThreeComponent } from './registration-page-three/registration-page-three.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';
import { RegistrationPageTwoComponent } from './registration-page-two/registration-page-two.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AuthenticationModule { }

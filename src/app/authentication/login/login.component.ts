import { Component, OnInit } from '@angular/core';
import { ILogin } from '../register-model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Login = {} as ILogin;
  constructor() { }

  ngOnInit(): void {
  }

  login(f: NgForm) {

  }
}

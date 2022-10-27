import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Isignup } from '../register-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Signup = { } as Isignup;
  constructor() { }

  ngOnInit(): void {
  }
 
  register(f:NgForm){

    
  }
}

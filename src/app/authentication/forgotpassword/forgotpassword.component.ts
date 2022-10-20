
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Iemail } from '../register-model';






@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})



export class ForgotpasswordComponent implements OnInit {
  Signup = { } as Iemail;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  

  constructor() { }
  ngOnInit(): void {
    
  }
  register(f:NgForm){

  }


  }
  




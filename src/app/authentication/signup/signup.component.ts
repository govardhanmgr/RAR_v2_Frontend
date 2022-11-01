import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Isignup } from '../register-model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 
  Signup = { } as Isignup;
  
  constructor(private _httpservice:HttpService,
    private router:Router,) { }
  subscription!: Subscription;
  ngOnInit(): void {
  }
 
  register(f:NgForm){
   
  }
}

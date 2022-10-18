
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';



@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})



export class ForgotpasswordComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor() { }

  ngOnInit(): void {
  }
  


}
import { Component, OnInit } from '@angular/core';
import { Isecurityquestions } from '../register-model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-securityquestions',
  templateUrl: './securityquestions.component.html',
  styleUrls: ['./securityquestions.component.css']
})
export class SecurityquestionsComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Securityquestions= { } as Isecurityquestions;
  
  constructor() { }

  ngOnInit(): void {
  }

  SEC(f:NgForm){

    
  }

}

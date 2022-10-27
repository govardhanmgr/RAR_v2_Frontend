import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { INewemp } from './newemp-model';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  NEWEMP = {} as  INewemp;
  constructor() { }

  ngOnInit(): void {
  }
  employee(f:NgForm){
    
  }
 
}

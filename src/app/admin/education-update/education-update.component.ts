import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { IEducationUpdate } from './education-update-model';

@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  educationupdate={} as IEducationUpdate;


  constructor() { }

  ngOnInit(): void {
  }

  education(f: NgForm){

  }

}

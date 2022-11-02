import { Component, OnInit } from '@angular/core';
import { Ijobupdate } from './jobupadate-model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  jobupdate = { } as Ijobupdate;

  constructor() { }

  ngOnInit(): void {
  }

  JOB(f:NgForm){
    
  }

}

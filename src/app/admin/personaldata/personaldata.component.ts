import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Ipersonaldata } from './personal-model';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  PERSONAL= {} as   Ipersonaldata;
  constructor() { }

  ngOnInit(): void {
  }
  personal(f:NgForm){
    
  }
}

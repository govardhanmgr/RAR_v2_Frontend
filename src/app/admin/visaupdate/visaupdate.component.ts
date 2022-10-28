import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,Validators,FormGroupDirective } from '@angular/forms';
import { Ivisaupdate } from './visa-model';

@Component({
  selector: 'app-visaupdate',
  templateUrl: './visaupdate.component.html',
  styleUrls: ['./visaupdate.component.css']
})
export class VisaupdateComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }
  VISA={} as Ivisaupdate;
  ngOnInit(): void {
  }
  visa(f:NgForm){
    
  }

}

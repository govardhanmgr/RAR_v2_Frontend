import { Component, OnInit } from '@angular/core';
export interface Element {
  FIRSTNAME: string;
  EmployeeNo: number;
  LASTNAME: string;
  TOTALOPERATIONALEXPENSES: string;
}


 
  
 
  

@Component({
  selector: 'app-operational-cost',
  templateUrl: './operational-cost.component.html',
  styleUrls: ['./operational-cost.component.css']
})
export class OperationalCostComponent implements OnInit {
  

  constructor() { }
  
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
export interface Element {
  FIRSTNAME: string;
  EmployeeNo: number;
  LASTNAME: string;
  TOTALOPERATIONALEXPENSES: string;
}

const ELEMENT_DATA: Element[] = [
 
  {EmployeeNo: 1002, FIRSTNAME: 'kolipara', LASTNAME: 'lahari', TOTALOPERATIONALEXPENSES: '$2000'},
  {EmployeeNo: 1003, FIRSTNAME: 'Naga deepti', LASTNAME: 'nandigum', TOTALOPERATIONALEXPENSES : '$3000'},
  {EmployeeNo: 1004, FIRSTNAME: 'Govardhan', LASTNAME:  'reddy', TOTALOPERATIONALEXPENSES: '$336'},
  {EmployeeNo: 1005, FIRSTNAME: 'Anusha', LASTNAME: 'ravvi',TOTALOPERATIONALEXPENSES : '$1000'},
  {EmployeeNo: 1006, FIRSTNAME: 'Narendra', LASTNAME: 'srinivaslu', TOTALOPERATIONALEXPENSES: '$3252'},
  {EmployeeNo: 1007, FIRSTNAME: 'Satya', LASTNAME: 'kishore', TOTALOPERATIONALEXPENSES: '$1500'},
 
  
];

@Component({
  selector: 'app-operational-cost',
  templateUrl: './operational-cost.component.html',
  styleUrls: ['./operational-cost.component.css']
})
export class OperationalCostComponent implements OnInit {
  displayedColumns = ['EmployeeNo', 'FIRSTNAME', 'LASTNAME', 'TOTALOPERATIONALEXPENSES'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  
  ngOnInit(): void {
  }

}

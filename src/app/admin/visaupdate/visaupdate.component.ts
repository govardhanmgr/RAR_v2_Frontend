import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
interface Visa {
  value: string;
  viewValue: string;
}
interface Country{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-visaupdate',
  templateUrl: './visaupdate.component.html',
  styleUrls: ['./visaupdate.component.css']
})
export class VisaupdateComponent implements OnInit {

  constructor() { }
  selectedValue!: string;
  Type: Visa[] = [
    {value: '0', viewValue: 'B-2'},
    {value: '1', viewValue: 'H, L, O, P and Q'},
    {value: '2', viewValue: 'M-1'},
    {value: '3', viewValue: 'B-1'},
    {value: '4', viewValue: 'H1-B'},

  ];
  Type1: Country[] = [
    {value: '0',viewValue: 'China'},
    {value: '1',viewValue: 'Mumbai'},
    {value: '2',viewValue: 'Hyderabad'},
    {value: '3',viewValue: 'Bangkok'},
    {value: '4',viewValue: 'Pune'},

  ];
  ngOnInit(): void {
  }
  

}

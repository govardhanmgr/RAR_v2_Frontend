import { keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

import { payrolldata } from './payrollexpenses';

@Component({
  selector: 'app-payrollexpenses',
  templateUrl: './payrollexpenses.component.html',
  styleUrls: ['./payrollexpenses.component.css']
})
export class PayrollexpensesComponent implements OnInit {
  
  PayrollData() {
    alert("welcome everyone");

  }
  payrolldata = [] as payrolldata[];
  
  
  
  

  constructor() { }

  ngOnInit(): void {
    
    this.payrolldata=[
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
      {Fname:'girish',Lname:'k',email:'k@gmail.com',role:'developer',entity:'snad',action:'update'},
	  
    ]
   
    
    

}
}

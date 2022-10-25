import { Component, OnInit } from '@angular/core';
import { payrolldata } from '../payrollexpenses/payrollexpenses';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
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

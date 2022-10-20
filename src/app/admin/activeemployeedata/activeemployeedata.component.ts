import { Component, OnInit } from '@angular/core';
import { IActive } from './activeemployeedata';

@Component({
  selector: 'app-activeemployeedata',
  templateUrl: './activeemployeedata.component.html',
  styleUrls: ['./activeemployeedata.component.css']
})
export class ActiveemployeedataComponent implements OnInit {
  actemployees=[]as IActive[];

  constructor() { }

  ngOnInit(): void {
    this.actemployees=[
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'},
      {actEmployeeNumber:'12346',actFirstName:'koushik',actLastName:'anumasa',actEmail:'koushk@gmail.com',actContactNumber:12345679,actRole:'snad'}
      
    ]
  }

}

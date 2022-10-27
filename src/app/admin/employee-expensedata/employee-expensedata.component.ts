import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IEmployeeExpensedata } from './employee-expensedatamodul';

@Component({
  selector: 'app-employee-expensedata',
  templateUrl: './employee-expensedata.component.html',
  styleUrls: ['./employee-expensedata.component.css']
})
export class EmployeeExpensedataComponent implements OnInit {
  EmployeeExpensedata = [] as IEmployeeExpensedata[];
  // constructor() { }

  // ngOnInit(): void {
  //   this.EmployeeExpensedata=[
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:101, FirstName:'poorna', LastName:'ramisetti', TotalEmployeeExpenses : '$12423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //     {EmployeeId:102, FirstName:'samyuktha', LastName:'alakanti', TotalEmployeeExpenses : '$12425' },
  //     {EmployeeId:103, FirstName:'rohini', LastName:'chinnu', TotalEmployeeExpenses : '$12723' },
  //     {EmployeeId:104, FirstName:'mounika', LastName:'boinapally', TotalEmployeeExpenses : '$18423' },
  //   ]
  subscription!: Subscription;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.employeeaccess();
  }

  employeeaccess() {
    this.subscription = this.http.getData("employeeaccessdata").subscribe({
      next: (data: any) => {
        this.EmployeeExpensedata = data.result as IEmployeeExpensedata[];
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  }


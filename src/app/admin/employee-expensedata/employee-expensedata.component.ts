import { Component, OnInit } from '@angular/core';
import { IEmployeeExpensedata } from './employee-expensedatamodul';

@Component({
  selector: 'app-employee-expensedata',
  templateUrl: './employee-expensedata.component.html',
  styleUrls: ['./employee-expensedata.component.css']
})
export class EmployeeExpensedataComponent implements OnInit {
  EmployeeExpensedata = [] as IEmployeeExpensedata[];
  constructor() { }

  ngOnInit(): void {
    this.EmployeeExpensedata=[
      {EmployeeId:101, FirstName:'poorna', LastName:'sai', TotalEmployeeExpenses : '$12423' },
      {EmployeeId:102, FirstName:'samyuktha', LastName:'anumasa', TotalEmployeeExpenses : '$12425' },
      {EmployeeId:103, FirstName:'rohini', LastName:'reddy', TotalEmployeeExpenses : '$12723' },
      {EmployeeId:104, FirstName:'mounika', LastName:'mouni', TotalEmployeeExpenses : '$18423' },
      {EmployeeId:101, FirstName:'poorna', LastName:'sai', TotalEmployeeExpenses : '$12423' },
      {EmployeeId:101, FirstName:'poorna', LastName:'sai', TotalEmployeeExpenses : '$12423' },
      {EmployeeId:101, FirstName:'poorna', LastName:'sai', TotalEmployeeExpenses : '$12423' },
      {EmployeeId:102, FirstName:'samyuktha', LastName:'anumasa', TotalEmployeeExpenses : '$12425' },
      {EmployeeId:103, FirstName:'rohini', LastName:'reddy', TotalEmployeeExpenses : '$12723' },
      {EmployeeId:104, FirstName:'mounika', LastName:'mouni', TotalEmployeeExpenses : '$18423' },
      {EmployeeId:102, FirstName:'samyuktha', LastName:'anumasa', TotalEmployeeExpenses : '$12425' },
      {EmployeeId:103, FirstName:'rohini', LastName:'reddy', TotalEmployeeExpenses : '$12723' },
      {EmployeeId:104, FirstName:'mounika', LastName:'mouni', TotalEmployeeExpenses : '$18423' },
    ]
  }

}

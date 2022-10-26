import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activeemployeedata',
  templateUrl: './activeemployeedata.component.html',
  styleUrls: ['./activeemployeedata.component.css'],
})
export class ActiveemployeedataComponent implements OnInit {
  actemployees = [] as any[];

  constructor() {}

  ngOnInit(): void {
    this.actemployees = [
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12345',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12344',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12343',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12341',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12348',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
      {
        actEmployeeNumber: '12346',
        actFirstName: 'koushik',
        actLastName: 'anumasa',
        actEmail: 'koushik@gmail.com',
        actContactNumber: 12345679,
        actRole: 'snad',
      },
    ];
  }
}

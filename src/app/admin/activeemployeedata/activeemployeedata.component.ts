import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IActive } from './activeemployeedata';

@Component({
  selector: 'app-activeemployeedata',
  templateUrl: './activeemployeedata.component.html',
  styleUrls: ['./activeemployeedata.component.css'],
})
export class ActiveemployeedataComponent implements OnInit {
  actemployees = [] as IActive[];
  subscription!: Subscription;
    // this.actemployees = [
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12345',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12344',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12343',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12341',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12348',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    //   {
    //     actEmployeeNumber: '12346',
    //     actFirstName: 'koushik',
    //     actLastName: 'anumasa',
    //     actEmail: 'koushik@gmail.com',
    //     actContactNumber: 12345679,
    //     actRole: 'snad',
    //   },
    // ];
    

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.empdata();
  }

  empdata() {
    this.subscription = this.http.getData("empdata").subscribe({
      next: (data: any) => {
        this.actemployees = data as IActive[];
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee-details';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit {

  employees = [] as IEmployee[];
  subscription!: Subscription;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this. empdata();
    
  }

  empdata() {
    this.subscription = this.http.getData("reg").subscribe({
      next: (data: any) => {
        this.employees = data as IEmployee[];
      },
      error: reason => console.log(reason)
    });
  }
 
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';

import { Subscriber, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Itabledata } from './amdpage-model';






@Component({
  selector: 'app-amdpage',
  templateUrl: './amdpage.component.html',
  styleUrls: ['./amdpage.component.css']
})
export class AmdpageComponent implements OnInit {
  subscription!: Subscription;
  tabledata=[] as any

   

  constructor(private http:HttpService) { }



  ngOnInit(): void {

    this.empdata();

  }



  empdata() {

    this.subscription = this.http.getData("empdata").subscribe({

      next: (data: any) => {

        this.tabledata= data as any
        console.log(this.tabledata)
        

      },

      error: reason => console.log(reason)

    });

  }

 

  ngOnDestroy(): void {

    if(this.subscription)

    this.subscription.unsubscribe();

  }


}

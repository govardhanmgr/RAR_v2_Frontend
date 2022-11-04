import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { HttpService } from 'src/app/services/http.service';
import { IUserDetails } from './userdetails-model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit, OnDestroy {

  
  subscription!: Subscription;

  postUserDetails = {} as any;
  userDetails = {} as IUserDetails
  roleData = [] as any
  EntityData: any;
 

  

  constructor(
    private http: HttpService
  ) { }


  ngOnInit(): void {
    this.getRoleData()
    this.getEntityData()
    this.userDetails = JSON.parse(localStorage.getItem("updateuser") || '{}');
    console.log(this.userDetails)

    

  }
  getRoleData() {

    this.subscription = this.http.getData("roles").subscribe({


      next: (data: any) => {

        this.roleData = data;
        console.log(this.roleData);




      },

      error: (reason: any) => console.log(reason)

    });

  }



  getEntityData() {

    this.subscription = this.http.getData("orgndata").subscribe({


      next: (data: any) => {

        this.EntityData = data;
        console.log(this.EntityData);




      },

      error: (reason: any) => console.log(reason)

    });

  }

  Details(f: NgForm) {
    console.log(this.userDetails)

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}

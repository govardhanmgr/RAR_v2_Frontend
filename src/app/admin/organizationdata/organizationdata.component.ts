import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

import { Subscription } from 'rxjs';
import { IExpense } from './org';
import { IRoles } from './roles';

@Component({
  selector: 'app-organizationdata',
  templateUrl: './organizationdata.component.html',
  styleUrls: ['./organizationdata.component.css']
})
export class OrganizationdataComponent implements OnInit {

  expenses = [] as IExpense [];

  roles= [] as IRoles [];

  entity:any;

  subscription!: Subscription;
  

  constructor(private  http:HttpService) { }


  ngOnInit(): void {
    this.subscription = this.http.getData('expenses').subscribe({
      next: (data: any) => {
        this.expenses = data as IExpense []; 
      },
      error: reason => console.log(reason)
    });


    this.subscription = this.http.getData('roles').subscribe({
      next:(data:any)=>{
        this.roles = data as IRoles [];
      }
    });


    this.subscription = this.http.getData('orgndata').subscribe({
      next:(data:any)=>{
         this.entity = data;
      }
    });


  }

  postExpensesData(_data:any){
    
    this.subscription= this.http.postdata('expenses',_data).subscribe({
     next:(_data:any)=>{ 
       this.ngOnInit();
     }
    });

 }


 postEntityData(_data:any){
  this.subscription= this.http.postdata('orgndata',_data).subscribe({
     next:(_data:any)=>{
      this.ngOnInit();
     }
  });
 }


 postRoleData(_data:any){
  console.log(_data)
  this.subscription = this.http.postdata('roles',_data).subscribe({
      next:(_data:any)=>{
        console.log(_data);
        this.ngOnInit();
      }
     
  });
 }


  ngOnDestroy():void{
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  


}

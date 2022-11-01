import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


import { Subscription } from 'rxjs';
import { IExpense } from './org';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-organizationdata',
  templateUrl: './organizationdata.component.html',
  styleUrls: ['./organizationdata.component.css']
})
export class OrganizationdataComponent implements OnInit {

  expenses = [] as IExpense [];

  role:any;

  roles={} as any;

  entities:any;

  entity={} as any;

  

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
        this.role = data ;
      }
    });


    this.subscription = this.http.getData('orgndata').subscribe({
      next:(data:any)=>{
         this.entities = data;
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


 postEntityData(_data:NgForm){
  console.log(_data)
  if(this.entity.entity==null){
    alert("entity Name is Required")
    return 
  }
  this.subscription= this.http.postdata('orgndata',this.entity).subscribe({
     next:(_data:any)=>{
      alert("Entity Added");
      this.ngOnInit();
     }
  });
  _data.resetForm();
 }

 postRoleData(_data:NgForm){
  console.log(_data)
  if(this.roles.roles==null){
    alert("role Name is Required");
    _data.resetForm();
    return 
  }
  this.subscription = this.http.postdata('roles',this.roles).subscribe({
    next:(_data:any)=>{
      alert("Role Added");
      this.ngOnInit();
    }
  });
  _data.resetForm();

 }
 


  ngOnDestroy():void{
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  


}

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

  expense : any;

  exp=[] as any;

  role:any;

  roles={} as any;

  entities:any;

  entity={} as any;



  subscription!: Subscription;


  constructor(private  http:HttpService) { }


  ngOnInit(): void {
    this.subscription = this.http.getData('expenses').subscribe({
      next: (data: any) => {
        this.expense = data ;
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

  postExpensesData(_data:NgForm){
    console.log(_data)
    if(this.exp.expenses==null || this.exp.expensescode==null){
      alert("Please Enter Expenses")
      return
    }
    console.log(this.exp)
    this.subscription = this.http.postdata('expenses',this.exp).subscribe({
      next:(_data:any)=>{
        console.log(_data)
      },
      error: reason => console.log(reason)
    })

 }


 postEntityData(_data:NgForm){
  console.log(_data)
  if(this.entity.entity==null){
    alert("Please Enter Entity")
    return
  }
  this.subscription= this.http.postdata('orgndata',this.entity).subscribe({
     next:(_data:any)=>{
      alert("Entity Added successfull");
      this.ngOnInit();
     }
  });
  _data.resetForm();
 }

 postRoleData(_data:NgForm){
  if(this.roles.roles==null){
    alert("Please Enter Role");

    return
  }
  this.subscription = this.http.postdata('roles',this.roles).subscribe({
    next:(_data:any)=>{
      alert("Role Added successfull");
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

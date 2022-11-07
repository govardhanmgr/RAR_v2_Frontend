import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ipersonaldata } from './personal-model';

@Component({
  selector: 'app-personaldata',
  templateUrl: './personaldata.component.html',
  styleUrls: ['./personaldata.component.css']
})
export class PersonaldataComponent implements OnInit, OnDestroy {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  educationData=[] as any;
  visaData=[] as any;
  PERSONAL= {} as   Ipersonaldata;
  empdata ={} as any;
  subscription !:Subscription;
  personalData=[] as any ;


  constructor(
    private http:HttpService,
    private router:Router
  ) { }
 

  ngOnInit(): void {
    this.empdata = JSON.parse(localStorage.getItem("personaldata") || '{}')
    console.log(this.empdata)

    this.getEducationData();
    this.getvisainformation();
  
  }



  getEducationData(){
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("geteducation", sdata).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.educationData= data
      }
    })
  }
  getvisainformation(){
    let sdata = {
      "employeeid": parseInt(this.empdata.employeeid)
    }
    console.log(sdata)
    this.subscription = this.http.postdata("getvisainformation", sdata).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.visaData= data
      }
    })
  }
  personal(f:NgForm){
    
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

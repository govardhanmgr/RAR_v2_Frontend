import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ISignup } from '../register-model';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'Angular';
  private stepper!: Stepper;
  Signup = {} as ISignup;
  show = false as boolean;
  subscription!: Subscription;
  entities= [] as any;
  constructor(private _httpservice:HttpService,
    private router:Router) { }

   

  next() {
    this.stepper.next()
  }

  onSubmit() {
    return false;
  }
  dobvalid(value:any) {


    console.log(value)
    

   var age = moment(moment.now()).diff(value, "years");
   console.log(age)

    if (age >= 18 && age <= 75) {

      this.show = false

    } else {

      this.show= true

    }
  }
  register(f: NgForm) {
    console.log(this.Signup)
    this.Signup.status = "pending"
    this.subscription = this._httpservice.postdata("reg", this.Signup).subscribe({
      next: (data: any) => {
        
        if(data.status == "success" && data.statuscode == 200){
          console.log(data);
          
       
          this.router.navigate(["/"])
        }
        else {
          alert(data.message);
        }
      },
      error: reason => {
        console.log(reason);
      }
    });
  
  }
  getentities(){
    this.subscription=this._httpservice.getData("orgndata").subscribe({
      next: data  => {
          this.entities=data
      }
    })
    console.log(this.entities)
  }
  
 
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1') as Element, {
      linear: false,
      animation: true
    });
    this.getentities();
  }
}



import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ISignup } from '../register-model';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';


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
  
  constructor() { }

   

  next() {
    
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

  }
 
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1') as Element, {
      linear: false,
      animation: true
    })
  }
}



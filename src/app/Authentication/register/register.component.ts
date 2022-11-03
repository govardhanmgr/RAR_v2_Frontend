import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = 'Angular';
  private stepper!: Stepper;
  
  constructor() { }



  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }
 
  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1') as Element, {
      linear: false,
      animation: true
    })
  }
}



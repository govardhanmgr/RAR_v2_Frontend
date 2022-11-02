import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserDetails } from './userdetails-model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  ok() {
alert("Updated");
  }

  userDetails = { } as IUserDetails;
  
  constructor() { }

  ngOnInit(): void {

  }

  Details(f:NgForm){
   console.log(this.userDetails)

  }

  

}

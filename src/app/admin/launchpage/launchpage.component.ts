import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpage',
  templateUrl: './launchpage.component.html',
  styleUrls: ['./launchpage.component.css']
})
export class LaunchpageComponent implements OnInit {

    loginuser : any;

  constructor() { }

  ngOnInit(): void {
    this.loginuser= JSON.parse(localStorage.getItem("logindetails") || '{}'); 
   
  }

}

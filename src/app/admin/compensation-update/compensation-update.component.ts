import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Icompensation } from './compensation-model';

@Component({
  selector: 'app-compensation-update',
  templateUrl: './compensation-update.component.html',
  styleUrls: ['./compensation-update.component.css']
})
export class CompensationUpdateComponent implements OnInit {
  compensation = { } as  Icompensation ;

  constructor() { }

  ngOnInit(): void {
  }

  Compen(f:NgForm){

    console.log(this.compensation);
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ldbpage',
  templateUrl: './ldbpage.component.html',
  styleUrls: ['./ldbpage.component.css']
})
export class LdbpageComponent implements OnInit {
  ldb ={} as any || null ;

  constructor() { }

  ngOnInit(): void {
  }
  load(f:NgForm){

  }
}

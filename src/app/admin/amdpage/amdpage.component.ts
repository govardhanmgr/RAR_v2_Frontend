import { Component, OnInit } from '@angular/core';
import { tabledata } from './amdpage-model';


const ELEMENT_DATA:tabledata [] = [
{Firstname:"girish",Lastname:"kollipara",Email:"kg@gmail.com",Role:"developer",Entity:"snad"},
{Firstname:"",Lastname:"",Email:"",Role:"",Entity:""},
{Firstname:"",Lastname:"",Email:"",Role:"",Entity:""},
{Firstname:"",Lastname:"",Email:"",Role:"",Entity:""},
{Firstname:"",Lastname:"",Email:"",Role:"",Entity:""},
{Firstname:"",Lastname:"",Email:"",Role:"",Entity:""}


];

@Component({
  selector: 'app-amdpage',
  templateUrl: './amdpage.component.html',
  styleUrls: ['./amdpage.component.css']
})
export class AmdpageComponent implements OnInit {
  displayedColumns: string[] = ['Firstname', 'Lastname', 'Email', 'Role','Entity'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: tabledata[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Ijobtab } from './jobtab-model';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-job-tab',
  templateUrl: './job-tab.component.html',
  styleUrls: ['./job-tab.component.css']
})
export class JobTabComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  subscription!: Subscription;
  jobtab=[] as any
  JOBTAB= {} as Ijobtab;


  constructor(private http:HttpService) {

   }

  ngOnInit(): void {
    this.empdata();
  }

  empdata() {

    this.subscription = this.http.getData("empdata").subscribe({

      next: (data: any) => {

        this.jobtab= data as any
        console.log(this.jobtab)
        

      },

      error: reason => console.log(reason)

    });

  }
 

}

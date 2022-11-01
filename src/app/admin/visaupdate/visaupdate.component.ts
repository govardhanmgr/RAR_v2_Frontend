import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm,Validators,FormGroupDirective } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Ivisaupdate } from './visa-model';

@Component({
  selector: 'app-visaupdate',
  templateUrl: './visaupdate.component.html',
  styleUrls: ['./visaupdate.component.css']
})
export class VisaupdateComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private http:HttpService) { }
  subscription!: Subscription;
  visaupdate=[] as any;
  VISA={} as Ivisaupdate;

  ngOnInit(): void {
    this.visainfo();
  }

  Visupdate(f: NgForm){
    
  }


    visainfo(){
      this.subscription=this.http.getData("getvisainformation").subscribe({
        next: data  => {
            this.visaupdate=data
        }
      })
      console.log(this.visaupdate)
    }
  }



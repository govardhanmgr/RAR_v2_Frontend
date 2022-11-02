import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IEducationUpdate } from './educationupdate-model';



@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  educationupdate={} as IEducationUpdate;
  subscription!: Subscription;


  constructor(private _httpservice:HttpService,
    private router:Router,) { }

  ngOnInit(): void {
  }


 education(f:NgForm){
  console.log(this.educationupdate);
  this.subscription=this._httpservice.postdata("education",this.educationupdate).subscribe({
   next: (data:any) => {
   if(data.status == "success" && data.statuscode == 200){
     console.log(data);
     localStorage.setItem("education",JSON.stringify(data.logindetails) );
     this.router.navigate(['/personaldata'])
   }
   else{
     alert(data.message)
   }

   },
   error:reason=>console.log(reason)
  });
 }
}

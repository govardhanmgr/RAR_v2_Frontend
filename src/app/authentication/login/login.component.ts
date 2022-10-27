import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILogin } from '../register-model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  Login = {} as ILogin;
  subscription!: Subscription;
  entitysubscription!:Subscription
  entities= [] as any;


  constructor(private _httpservice:HttpService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    this.getentities();
    
  }

  login(f: NgForm) {
         console.log(this.Login);
         this.subscription=this._httpservice.logindata("login",this.Login).subscribe({
          next: (data:any) => {
          if(data.status == "success" && data.statuscode == 200){
            console.log(data);
            localStorage.setItem("logindetails",JSON.stringify(data.logindetails) );
            localStorage.setItem("loginedIn", data.loginedIn);
            this.router.navigate(["/admin/launchpage"])
          }
          else{
            alert(data.message)
          }

          },
          error:reason=>console.log(reason)
         });


  }

  getentities(){
    this.entitysubscription=this._httpservice.getData("orgndata").subscribe({
      next: data  => {
          this.entities=data
      }
    })
    console.log(this.entities)
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.entitysubscription){
      this.entities.unsubscribe();
    }
    
    
  }
}

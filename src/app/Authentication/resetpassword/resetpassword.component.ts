import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { IPassword } from '../register-model';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  passwordFormControl =new FormControl('',[Validators.required])
  Password = {} as IPassword;
  show=false as boolean;

  constructor() { }

  ngOnInit(): void {
  }
  submit(f:NgForm){
    console.log(this.Password)
  }

  handleConfirmPassword(value:any){
    console.log(value)
    if(this.Password.confirmpassword){
      if(this.Password.newpassword!= this.Password.confirmpassword){
       this.show=true
      }
      else{
        this.show=false
      }
    }
  }
  
  


}

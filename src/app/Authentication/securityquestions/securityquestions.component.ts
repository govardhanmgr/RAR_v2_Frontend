import { Component, OnInit, EventEmitter } from '@angular/core';
import { Isecurityquestions } from '../register-model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({

  selector: 'app-securityquestions',
  templateUrl: './securityquestions.component.html',
  styleUrls: ['./securityquestions.component.css']

})

export class SecurityquestionsComponent implements OnInit {

  FormControl = new FormControl('', [Validators.required]);

  Securityquestions = {} as Isecurityquestions;
  questionsSecurity: any = [];
  constructor() { }

  ngOnInit(): void {
    this.questionsSecurity = [
      "What is your favourite food/dish?",
      "Who is your childhood hero ?",
      "What is the name of your favourite pet?",
      "In what city you were born?",
      "What is the name of your first school?"]
    console.log("my console event");
    
  }

  SEC(f: NgForm) {
    console.log(this.Securityquestions)
    // console.log("my console event");
  }

  onChangeQueryDetails(event: any,) {
    console.log("my console event", event,);
  }
  valueSelected(){

    this.questionsSecurity=this.questionsSecurity.filter((item: string ) => item.indexOf(this.Securityquestions.Question1))

  }
  VALUESELECTED(){
    this.questionsSecurity=this.questionsSecurity.filter((item: string) => item.indexOf(this.Securityquestions.Question1) && item.indexOf(this.Securityquestions.Question2))

  }
}
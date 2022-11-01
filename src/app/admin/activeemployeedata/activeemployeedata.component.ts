import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IActive } from './activeemployeedata';

@Component({
  selector: 'app-activeemployeedata',
  templateUrl: './activeemployeedata.component.html',
  styleUrls: ['./activeemployeedata.component.css'],
})
export class ActiveemployeedataComponent implements OnInit {
  actemployees = [] as IActive[];
  subscription!: Subscription;
  searchdata = [] as any
  constructor(private http:HttpService,private router:Router) { }

  ngOnInit(): void {
    this.empdata();
  }

  empdata() {
    this.subscription = this.http.getData("empdata").subscribe({
      next: (data: any) => {
        this.actemployees = data as IActive[];
      },
      error: reason => console.log(reason)
    });

  }
  select(act:any){
    localStorage.setItem("personaldata",JSON.stringify(act) );
    this.router.navigate(["/admin/personaldata"])
  }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
  
    SEARCH(act:any) {
     let se = []
     if(this.searchdata !== '') {
      se = this.searchdata.filter((p: { firstname: string; lastname: string; emailaddress: string; jobtitle: string; employeeid: number; }) => 
        p.firstname.toLowerCase().includes(this.searchdata.toLowerCase()) ||
        p.lastname.toLowerCase().includes(this.searchdata.toLowerCase()) ||
        p.emailaddress.toLowerCase().includes(this.searchdata.toLowerCase()) ||
        p.jobtitle.toLowerCase().includes(this.searchdata.toLowerCase()) ||
        p.employeeid === Number(this.searchdata)
      )
     } else {
      se = this.searchdata
     }
     return se
    }
 

  
}

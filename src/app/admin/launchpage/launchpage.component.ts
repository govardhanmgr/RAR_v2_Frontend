import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-launchpage',
  templateUrl: './launchpage.component.html',
  styleUrls: ['./launchpage.component.css']
})
export class LaunchpageComponent implements OnInit {

    loginuser : any;
    public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.loginuser= JSON.parse(localStorage.getItem("logindetails") || '{}'); 
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Outstanding Receivabels', 'Payroll Expenses', 'Employee Expenses','Management Expenses','Operational Cost',
								  ], 
	       datasets: [
          {
           
            data: ['20000','40000', '60000', '80000', '90000',
								 ],
            backgroundColor: 'pink'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
}

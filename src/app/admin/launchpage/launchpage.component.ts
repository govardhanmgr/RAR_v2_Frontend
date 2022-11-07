import { Component, OnDestroy, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-launchpage',
  templateUrl: './launchpage.component.html',
  styleUrls: ['./launchpage.component.css'],
})
export class LaunchpageComponent implements OnInit, OnDestroy {
  loginuser: any;
  public chart: any;
  chartData = [] as any;
  subscription!: Subscription;
  dashBoardData = {} as any;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.loginuser = JSON.parse(localStorage.getItem('logindetails') || '{}');
    this.getDashBoardData();
    this.getOperationalcostData();

    console.log(this.chartData);
  }

  getDashBoardData() {
    this.subscription = this.http.getData('dashboard').subscribe({
      next: (data: any) => {
        console.log(data);
        this.dashBoardData.activeEmployees = data.activeemp;
        this.dashBoardData.OReceivables = data.receivablestotal;
        this.dashBoardData.PayrollExp = data.payrollexpensestotal;
        this.dashBoardData.EmpExpenses = data.empexpensestotal;
        this.dashBoardData.MgmtExpenses = data.mgmtexpensestotal;

        let chart = [
          this.dashBoardData.OReceivables,
          this.dashBoardData.PayrollExp,
          this.dashBoardData.EmpExpenses,
          this.dashBoardData.MgmtExpenses,
          this.dashBoardData.operationalCount,
        ];
        this.chartData = chart;
        console.log(this.chartData);
      },
      error: (reason) => console.log(reason),
    });
    this.createChart();
  }
  getOperationalcostData() {
    this.subscription = this.http.getData('operationalaccess').subscribe({
      next: (data: any) => {
        console.log(data);
        let showData = data.result;
        console.log(showData[0].totalexpenses);
        let opCount = 0;
        for (var i = 0; i < showData.length; i++) {
          opCount = (opCount + parseInt(showData[i].totalexpenses)) as number;
          this.dashBoardData.operationalCount = opCount;
        }
        console.log(this.dashBoardData.operationalCount);
      },
      error: (reason) => console.log(reason),
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Outstanding Receivabels',
          'Payroll Expenses',
          'Employee Expenses',
          'Management Expenses',
          'Operational Cost',
        ],
        datasets: [
          {
            label: 'EXPENSE DATA',
            data: [
              this.dashBoardData.OReceivables,
              this.chartData[1],
              this.chartData[2],
              this.chartData[3],
              this.chartData[4],
            ],
            backgroundColor: 'pink',
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
    console.log(this.dashBoardData.OReceivables);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

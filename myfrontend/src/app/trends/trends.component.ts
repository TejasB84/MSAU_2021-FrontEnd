import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { JoiningdetailsService } from '../joiningdetails.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private joiningdetailsservice : JoiningdetailsService) { }


  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of Candidates',

        },
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };

barChartLabels: Label[] = [];
barChartType: ChartType = 'bar';
barChartLegend = true;
barChartPlugins = [];

barChartData: ChartDataSets[] =
  [{
    data: [],
    label: 'Candidate Hired'
  }];

  // // PIE CHART FOR DEMANDED SKILLS
  // dmdChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'right',
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: function (tooltipItems, data) {
  //         return ''+data.labels[tooltipItems.index]+' '+data.datasets[0].data[tooltipItems.index] + ' %';
  //       }
  //     }
  //   },
  // };

  // dmdChartLabels: Label[]=[];
  // dmdChartData: number[]=[];
  // dmdChartType: ChartType = 'pie';
  // dmdChartLegend = true;


  // PIE CHART FOR SKILLS OF SELECTED ONBOARDEES
slChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'right',
  },
  tooltips: {
    enabled: true,
    mode: 'single',
  },
};

slChartLabels: Label[]=[];
slChartData: number[]=[];
slChartType: ChartType = 'pie';
slChartLegend = true;
  
  ngOnInit(): void {

    this.joiningdetailsservice.getcountPerYear().subscribe(data => {
      this.setBarGraphValues(data);
      console.log(data);
    })
    
    // this.joiningdetailsservice.getDmdSkillData().subscribe(data => {
    //   console.log("Skill Data: ", Object.keys(data));
    //   this.setDmdChartValues(data);
    // })
    // this.joiningdetailsservice.getSelectedSkillData().subscribe(data => {
    //   console.log("Skill Data: ", Object.keys(data));
    //   this.setSelectedChartValues(data);
    // })
  }

  setBarGraphValues(data : any) {
    for (const i in data) {
      console.log(data[i].date);
      console.log(data[i].id);
      this.barChartLabels.push(data[i].date);
      this.barChartData[0].data!.push(data[i].id);
    }
  }

  // setDmdChartValues(data:any) {
  //   this.dmdChartLabels = Object.keys(data);
  //   this.dmdChartData = Object.values(data);
  // }
  setSelectedChartValues(data:any) {
    this.slChartLabels = Object.keys(data);
    this.slChartData = Object.values(data);
  }

}
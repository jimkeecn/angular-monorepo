import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration,registerables } from 'chart.js';
Chart.register(...registerables);
import "chartjs-adapter-date-fns";
@Component({
  selector: 'am-chart-js-ui-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:false,
})
export class ChartComponent implements OnInit {
  private _config!: any;
  @Input()
  get config(): any { 
    return this.config;
  }
  set config(value: ChartConfiguration) { 
    if (value) {
      console.log(value);
      setTimeout(() => {
        new Chart(this.id, value);
      })
      
    }
  }
  @Input() id!: string;
  @Input() chartTitle: string = 'Chart is loading back....';
  constructor() { }
  
  ngOnInit(): void {
    
  }
}

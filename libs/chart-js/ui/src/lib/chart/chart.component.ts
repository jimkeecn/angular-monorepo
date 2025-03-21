import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'am-chart-js-ui-chart',
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  private _config!: any;
  @Input()
  get config(): any { 
    return this.config;
  }
  set config(value: ChartConfiguration) { 
    if (value) {
      new Chart(this.id, value);
    }
  }
  @Input() id!: string;
  constructor() { }
  
  ngOnInit(): void {
    
  }
}

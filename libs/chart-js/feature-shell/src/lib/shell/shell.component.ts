import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsDataFacades } from '@angular-monorepo/chart-js/data-access';
import { ChartConfiguration } from 'chart.js';
import {
  fakeChartjsContext, PieChartConst, BarChartConst, LineChartConst,
  LineChart2Const, LineChart3Const, PieChartTitleConst, BarChartTitleConst, LineChartTitleConst,
  LineChartTitle2Const,LineChart3TitleConst
} from './models/shell';
@Component({
  selector: 'am-chart-js-feature-shell-shell',
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  standalone:false,
})
export class ShellComponent implements OnInit, OnDestroy {

  pie_chart: any | Partial<ChartConfiguration>;
  bar_chart: any | Partial<ChartConfiguration>;
  line_chart: any | Partial<ChartConfiguration>;
  line_chart2: any | Partial<ChartConfiguration>;
  line_chart3: any | Partial<ChartConfiguration>;

  readonly PieChartConst = PieChartConst;
  readonly BarChartConst = BarChartConst;
  readonly LineChartConst = LineChartConst;
  readonly LineChart2Const = LineChart2Const;
  readonly LineChart3Const = LineChart3Const;

  readonly PieChartTitleConst = PieChartTitleConst;
  readonly BarChartTitleConst = BarChartTitleConst;
  readonly LineChartTitleConst = LineChartTitleConst;
  readonly LineChartTitle2Const = LineChartTitle2Const;
  readonly LineChart3TitleConst = LineChart3TitleConst;

  constructor(private chartJsDataFacades: ChartJsDataFacades) {
    
  }

  ngOnInit() {
    this.chartJsDataFacades.loadData();

    this.chartJsDataFacades.pieChart$.subscribe((data) => { 
      if (data) {
        this.pie_chart = {
          type: 'pie',
          data: {
            datasets: [
              {
                data:data.data
              }
            ],
            labels: data.labels
          },
          options: {
            interaction: {
              mode: 'dataset'
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                bodyColor: '#ffffff',
                bodyAlign: 'right',
                
              }
            }
          }
        } as Partial<ChartConfiguration>
      } else {
        alert('No data found for pie chart');
      }
    });

    this.chartJsDataFacades.barChart$.subscribe((data) => { 
      if (data) {
        this.bar_chart = {
          type: 'bar',
          data: {
            datasets: [
              {
                data:data.data
              }
            ],
            labels: data.labels
          },
          options: {
            interaction: {
              axis: 'x'
            },
            scales: {
              y: {
                ticks: {
                  callback: function(value, index, values) {
                    return `$${value.toLocaleString()}`;
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                bodyColor: '#ffffff',
                bodyAlign: 'right',
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if(context.parsed.y !== null){
                      label += `$${context.parsed.y.toLocaleString()}`;
                    }
                    return label;
                  }
                }
              }
            }
          }
        } as Partial<ChartConfiguration>
      } else {
        alert('No data found for bar chart');
      }
    })

    this.chartJsDataFacades.lineChart$.subscribe((data) => { 
      if (data) {
        this.line_chart = {
          type: 'line',
          data: {
            datasets: [
              {
                data: data.data,
                fill: true,
                borderWidth: 2,
                pointHoverRadius: 6, // Bigger point on hover
                backgroundColor: (context:fakeChartjsContext | any) => {
                  const gradient = [
                    'rgba(235, 27, 72, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(0, 191, 255, 0.6)'
                  ];

                  if (!context.chart.chartArea) {
                    return;
                  }
  
                  const { ctx, data, chartArea: { top, bottom } } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  gradientBg.addColorStop(0, gradient[0]);
                  gradientBg.addColorStop(0.5, gradient[1]);
                  gradientBg.addColorStop(1, gradient[2]);
  
                  return gradientBg;
                }
              }
            ],
            labels: data.labels
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if(context.parsed.y !== null){
                      label += `$${context.parsed.y.toLocaleString()}`;
                    }
                    return label;
                  }
                }
              }
            },
            scales: {
              y: {
                ticks: {
                  callback: function(value, index, values) {
                    return `$${value.toLocaleString()}`;
                  }
                }
              }
            }
          }
        } as Partial<ChartConfiguration>

        this.line_chart2 = {
          type: 'line',
          data: {
            datasets: [
              {
                data: data.data,
                fill: true,
                borderWidth: 2,
                pointHoverRadius: 6, // Bigger point on hover
                backgroundColor: (context:fakeChartjsContext | any) => {
                  const gradient = [
                    'rgba(235, 27, 72, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(0, 191, 255, 0.6)'
                  ];
                  
                  if (!context.chart.chartArea) {
                    return;
                  }

                  const { ctx, data, chartArea: { top, bottom } } = context.chart;
                  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                  gradientBg.addColorStop(0, gradient[0]);
                  gradientBg.addColorStop(0.5, gradient[1]);
                  gradientBg.addColorStop(1, gradient[2]);

                  return gradientBg;
                }
              }
            ],
            labels: data.labels
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if(context.parsed.y !== null){
                      label += `$${context.parsed.y.toLocaleString()}`;
                    }
                    return label;
                  }
                }
              }
            },
            scales: {
             
              y: {
                ticks: {
                  callback: function (value, index, values) {
                    return `$${value.toLocaleString()}`;
                  }
                }
              },
              x: {
                ticks: {
                  display: true,
                  autoSkip:false,
                  callback: function (value, index, values) {
                    return index % 5 === 0 || index == data.labels.length - 1 ? getLabelForValue(data.labels, index) : '';
                  }
                }
              }
            }
          }
        } as Partial<ChartConfiguration>

        function getLabelForValue(labels:string[],index:number) {
          return labels[index];
        }

      } else {
        alert('No data found for line chart');
      }
    })

    this.chartJsDataFacades.lineChart2$.subscribe((data) => { 
      if (data && data.length > 0) {
        const formattedData = data.map(entry => ({
          x: Number(entry.x), 
          y: entry.y
        }));
        this.line_chart3 = {
          type: 'line',
          data: {
            datasets: [
              {
                label: "Rocket Launches",
                data: formattedData, 
                indexAxis: "x",
                borderColor: 'blue',
                borderWidth: 1,
                pointRadius: 0, 
              }
            ]
          },
          options: {
            parsing: false,
            plugins: {
              decimation: {
                enabled: true,
                algorithm: "lttb",
                samples: 100,
                threshold: 100
              }
            },
            scales: {
              x: {
                type: "time",
                position: "bottom"
              },
            }
          }
        } as Partial<ChartConfiguration>
      } else {
        alert('No data found for line chart 2');
      }
    });
    
  }

  ngOnDestroy() {

  }
}

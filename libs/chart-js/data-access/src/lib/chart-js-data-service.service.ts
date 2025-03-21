import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IChart, IChartDecimation, IData } from './models';

@Injectable({
  providedIn: 'root'
})
export class ChartJsDataServiceService {

  pie_chart$ = new  BehaviorSubject<IChart | null>(null);
  bar_chart$ = new  BehaviorSubject<IChart | null>(null);
  line_chart$ = new BehaviorSubject<IChart | null>(null);
  line_chart2$ = new BehaviorSubject<IChartDecimation[] | null>([]);
  
  constructor(private http: HttpClient) { }


  getData(){
    return this.http
      .get<IData[]>('https://www.ag-grid.com/example-assets/space-mission-data.json').pipe(
        tap(data => { 
          // Pie chart
          const pie_chart_record: Record<string, number> = {};
          data.forEach(item => {
            pie_chart_record[item.company] = (pie_chart_record[item.company] || 0) + 1;
          });
          this.pie_chart$?.next({
            labels: Object.keys(pie_chart_record).sort((a,b)=> pie_chart_record[b] - pie_chart_record[a]),
            data: Object.keys(pie_chart_record).sort((a,b)=> pie_chart_record[b] - pie_chart_record[a]).map(key => pie_chart_record[key])
          });

          // Bar chart
          const bar_chart_hashmap = new Map<string, number>();

          data.forEach(item => { 
            bar_chart_hashmap.set(item.company, (bar_chart_hashmap.get(item.company) || 0) + item.price);
          })

          this.bar_chart$.next({
            labels: Array.from(bar_chart_hashmap.keys()).sort((a,b)=> bar_chart_hashmap.get(b)! - bar_chart_hashmap.get(a)!),
            data: Array.from(bar_chart_hashmap.values()).sort((a,b)=> b - a)
          } as IChart)

          //Line Chart
          const line_chart_hashmap = new Map<number, number>();
          data.forEach(item => { 
            const date = new Date(item.date);
            const fullYear = date.getFullYear();
            line_chart_hashmap.set(fullYear, (line_chart_hashmap.get(fullYear) || 0) + item.price);
          })

          console.log(line_chart_hashmap);

          this.line_chart$.next({
            labels: Array.from(line_chart_hashmap.keys()).sort((a,b)=> a - b).map(key => key.toString()),
            data: Array.from(line_chart_hashmap.values()).sort((a,b)=> a - b)
          } as IChart)

          //Line Chart 2
          const line_chart2_hashmap = new Map<number, number>();
          data.forEach(item => { 
            if(item.successful === false) return;
            const date = new Date(item.date).getTime();
            line_chart2_hashmap.set(date, (line_chart2_hashmap.get(date) || 0) + 1);
          });

          const sortedData: IChartDecimation[] = Array.from(line_chart2_hashmap.entries())
          .sort((a, b) => a[0] - b[0]) // Sort by date
          .map(([timestamp, count]) => ({
            x: timestamp, // Convert timestamp to "YYYY-MM-DD"
            y: count
          }));
          this.line_chart2$.next(sortedData)

        })
    )
  }
  
  getEarthQuakeData() {
    return this.http
      .get('https://api.open-meteo.com/v1/forecast');
  }
}

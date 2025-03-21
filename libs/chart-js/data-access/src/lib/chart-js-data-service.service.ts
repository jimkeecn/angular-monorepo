import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IChart, IChartDecimation, IData } from './models';

@Injectable({
  providedIn: 'root'
})
export class ChartJsDataServiceService {

  private pie_chart$ = new  BehaviorSubject<IChart | null>(null);
  private bar_chart$ = new  BehaviorSubject<IChart | null>(null);
  private line_chart$ = new BehaviorSubject<IChart | null>(null);
  private line_chart2$ = new BehaviorSubject<IChartDecimation[] | null>([]);
  
  constructor(private http: HttpClient) { }


  getData(){
    return this.http
      .get<IData[]>('https://www.ag-grid.com/example-assets/space-mission-data.json');
  }
}

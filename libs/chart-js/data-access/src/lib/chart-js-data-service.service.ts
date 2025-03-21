import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IChart, IChartDecimation, IData } from './models';

@Injectable({
  providedIn: 'root'
})
export class ChartJsDataServiceService {
  
  constructor(private http: HttpClient) { }

  getData(){
    return this.http
      .get<IData[]>('https://www.ag-grid.com/example-assets/space-mission-data.json');
  }
}

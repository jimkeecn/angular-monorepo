import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadChartData } from "./chart-js-data.actions";
import { ChartDataState } from "../models";
import { selectBarChart, selectLineChart, selectLineChart2, selectPieChart } from "./chart-js-data.selectors";

@Injectable({ providedIn: 'root' })
export class ChartJsDataFacades{
  
    pieChart$;
    barChart$;
    lineChart$;
    lineChart2$;
  
    constructor(private store: Store<ChartDataState>) {
      this.pieChart$ = this.store.select(selectPieChart);
      this.barChart$ = this.store.select(selectBarChart);
      this.lineChart$ = this.store.select(selectLineChart);
      this.lineChart2$ = this.store.select(selectLineChart2);
    }

    loadData() {
      this.store.dispatch(loadChartData());
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsDataServiceService } from './chart-js-data-service.service';
import { ChartJsDataFacades } from './+state/chart-js-data.facades';
import { StoreModule } from '@ngrx/store';
import { CHART_JS_FEATURE_KEY, chartDataReducer } from './+state/chart-js-data.reducer';



@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(CHART_JS_FEATURE_KEY,chartDataReducer)
  ],
  providers:[ChartJsDataServiceService,ChartJsDataFacades],
})
export class ChartJsDataModuleModule { }

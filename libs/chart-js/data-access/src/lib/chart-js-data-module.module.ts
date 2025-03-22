import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsDataServiceService } from './chart-js-data-service.service';
import { ChartJsDataFacades } from './+state/chart-js-data.facades';
import { StoreModule } from '@ngrx/store';
import { chartDataReducer } from './+state/chart-js-data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChartDataEffects } from './+state/chart-js-data.effects';
import { CHART_JS_FEATURE_KEY } from './models';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(CHART_JS_FEATURE_KEY, chartDataReducer),
    EffectsModule.forFeature([ChartDataEffects]),
  ],
  providers:[ChartJsDataServiceService,ChartJsDataFacades],
})
export class ChartJsDataModuleModule { }

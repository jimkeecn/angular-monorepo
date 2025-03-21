import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsRoutingModule } from './chartjs-routing.module';

import { ChartJsDataModuleModule}  from '@angular-monorepo/chart-js/data-access'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartJsDataModuleModule,
    ChartjsRoutingModule
  ]
})
export class ChartjsModule { }

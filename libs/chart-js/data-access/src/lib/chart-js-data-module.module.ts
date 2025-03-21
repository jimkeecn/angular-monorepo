import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsDataServiceService } from './chart-js-data-service.service';
import { ChartJsDataFacades } from './+state/chart-js-data.facades';



@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ChartJsDataServiceService,ChartJsDataFacades]
})
export class ChartJsDataModuleModule { }

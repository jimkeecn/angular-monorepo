import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJsDataServiceService } from './chart-js-data-service.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers:[ChartJsDataServiceService]
})
export class ChartJsDataModuleModule { }

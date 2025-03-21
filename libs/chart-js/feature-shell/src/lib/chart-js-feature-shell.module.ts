import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartjsRoutingModule } from './chartjs-routing.module';

import { ChartJsDataModuleModule } from '@angular-monorepo/chart-js/data-access'
import { ChartjsuiModule } from '@angular-monorepo/chart-js/ui'
import { ShellComponent } from './shell/shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    ChartjsuiModule,
    ChartJsDataModuleModule,
    ChartjsRoutingModule,
  ],
})
export class ChartJsFeatureShellModule { }

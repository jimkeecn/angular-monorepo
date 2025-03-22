import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureShellRoutingModule } from './feature-shell-routing.module';
import { AgGridFeatureShellComponent } from './ag-grid-feature-shell/ag-grid-feature-shell.component';


@NgModule({
  declarations: [AgGridFeatureShellComponent],
  imports: [
    CommonModule,
    FeatureShellRoutingModule
  ],
  exports: [
    AgGridFeatureShellComponent
  ]
})
export class FeatureShellModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureShellRoutingModule } from './feature-shell-routing.module';
import { AgGridFeatureShellComponent } from './ag-grid-feature-shell/ag-grid-feature-shell.component';
import { DataAccessModule } from '@angular-monorepo/ag-grid-data-access'; 
import { AgGridUiModule} from '@angular-monorepo/ag-grid-ui'
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AgGridFeatureShellComponent],
  imports: [
    CommonModule,
    DataAccessModule,
    FeatureShellRoutingModule,
    AgGridUiModule,
    AgGridModule,
  ],
  exports: [
    AgGridFeatureShellComponent
  ]
})
export class FeatureShellModule { }

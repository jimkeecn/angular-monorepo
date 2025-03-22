import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridFeatureShellComponent } from './ag-grid-feature-shell/ag-grid-feature-shell.component';

const routes: Routes = [
  {
    path: '',
    component:AgGridFeatureShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureShellRoutingModule { }

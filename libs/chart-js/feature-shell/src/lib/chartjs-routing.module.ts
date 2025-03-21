import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartjsRoutingModule { }

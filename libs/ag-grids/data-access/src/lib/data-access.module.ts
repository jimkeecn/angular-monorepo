import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { tableDataReducer } from './+state/reducers';
import { FEATURE_KEY } from './models/model';
import { EffectsModule } from '@ngrx/effects';
import { AgGridEffects } from './+state/effects';
import { DataAccessHttpService } from './services/data-access-http.service';
import { AgGridDataFacades } from './+state/facades';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FEATURE_KEY, tableDataReducer),
    EffectsModule.forFeature([AgGridEffects])
  ],
  providers:[DataAccessHttpService,AgGridDataFacades]
})
export class DataAccessModule { }

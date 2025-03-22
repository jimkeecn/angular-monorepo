import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { loadChartData, loadChartDataFailure, loadChartDataSuccess } from './chart-js-data.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { IData } from '../models';
import { ChartJsDataServiceService } from '../chart-js-data-service.service';

@Injectable()
export class ChartDataEffects{
    constructor(private actions$: Actions, private service: ChartJsDataServiceService) {
    }

    loadData$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadChartData),
          mergeMap(() =>
              this.service.getData().pipe(
                  map(data => loadChartDataSuccess({ data })),
                  catchError(error => of(loadChartDataFailure({ error })))
          )
        ))
    );
}
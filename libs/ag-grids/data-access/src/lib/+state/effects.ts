import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DataAccessHttpService } from '../services/data-access-http.service';
import { loadTableData, loadTableDataFailure, loadTableDataSuccess } from './actions';

@Injectable()
export class AgGridEffects{
    constructor(private actions$: Actions, private service: DataAccessHttpService) {
    }

    loadData$ = createEffect(() =>
        this.actions$.pipe(
          ofType(loadTableData),
          mergeMap(() =>
              this.service.getData().pipe(
                  map(data => loadTableDataSuccess({ data })),
                  catchError(error => of(loadTableDataFailure({ error })))
          )
        ))
    );
}
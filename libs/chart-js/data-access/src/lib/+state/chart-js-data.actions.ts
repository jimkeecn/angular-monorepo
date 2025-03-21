import { createAction, props } from '@ngrx/store';
import { IChart, IChartDecimation, IData } from '../models';

export const loadChartData = createAction('[ChartJSData] Load Chart Data');
export const loadChartDataSuccess = createAction(
    '[Chart] Load Chart Data Success',
    props<{ data: IData[] }>()
  );
  export const loadChartDataFailure = createAction(
    '[Chart] Load Chart Data Failure',
    props<{ error: any }>()
  );
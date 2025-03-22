import { createAction, props } from '@ngrx/store';

export const loadTableData = createAction('[AgGridData] Load Table Data');
export const loadTableDataSuccess = createAction('[AgGridData] Load Table Data Success', props<{ data: any[] }>());
export const loadTableDataFailure = createAction('[AgGridData] Load Table Data Fail', props<{ error: any }>());
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AgGridDataState, FEATURE_KEY } from '../models/model';

const selectTableState = createFeatureSelector<AgGridDataState>(FEATURE_KEY);

export const selectData = createSelector(selectTableState, (state) => state.data);
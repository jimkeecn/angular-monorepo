import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CHART_JS_FEATURE_KEY, ChartDataState } from '../models';

const selectChartState = createFeatureSelector<ChartDataState>(CHART_JS_FEATURE_KEY);

export const selectPieChart = createSelector(selectChartState, (state) => state.pieChart);
export const selectBarChart = createSelector(selectChartState, (state) => state.barChart);
export const selectLineChart = createSelector(selectChartState, (state) => state.lineChart);
export const selectLineChart2 = createSelector(selectChartState, (state) => state.lineChart2);
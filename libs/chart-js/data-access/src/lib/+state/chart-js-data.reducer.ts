import { createReducer, on } from '@ngrx/store';
import { loadChartData, loadChartDataSuccess } from './chart-js-data.actions';
import { ChartDataState, IChart, IChartDecimation, IData, initialState } from '../models';

export const chartDataReducer = createReducer(
    initialState,
    on(loadChartData, (state) => ({ ...state })),
    on(loadChartDataSuccess, (state, { data }) => { 
        return {
            ...state,
            data,
            pieChart: buildPieChart(data),
            barChart: buildBarChart(data),
            lineChart: buildLineChart(data),
            lineChart2: buildLineChart2(data)
        }
    })
)
  

function buildPieChart(data: IData[]): IChart { 
    const pie_chart_record: Record<string, number> = {};
    data.forEach(item => {
      pie_chart_record[item.company] = (pie_chart_record[item.company] || 0) + 1;
    });
    return {
        labels: Object.keys(pie_chart_record).sort((a, b) => pie_chart_record[b] - pie_chart_record[a]),
        data: Object.keys(pie_chart_record).sort((a, b) => pie_chart_record[b] - pie_chart_record[a]).map(key => pie_chart_record[key])
    } as IChart;
}

function buildBarChart(data: IData[]): IChart { 
    const bar_chart_hashmap = new Map<string, number>();

    data.forEach(item => { 
      bar_chart_hashmap.set(item.company, (bar_chart_hashmap.get(item.company) || 0) + item.price);
    })

    return {
        labels: Array.from(bar_chart_hashmap.keys()).sort((a, b) => bar_chart_hashmap.get(b)! - bar_chart_hashmap.get(a)!),
        data: Array.from(bar_chart_hashmap.values()).sort((a, b) => b - a)
    } as IChart;
}

function buildLineChart(data: IData[]): IChart { 
    const line_chart_hashmap = new Map<number, number>();
    data.forEach(item => { 
    const date = new Date(item.date);
    const fullYear = date.getFullYear();
    line_chart_hashmap.set(fullYear, (line_chart_hashmap.get(fullYear) || 0) + item.price);
    })

    return {
        labels: Array.from(line_chart_hashmap.keys()).sort((a, b) => a - b).map(key => key.toString()),
        data: Array.from(line_chart_hashmap.values()).sort((a, b) => a - b)
    } as IChart;
}

function buildLineChart2(data: IData[]): IChartDecimation[] { 
    const line_chart2_hashmap = new Map<number, number>();
    data.forEach(item => { 
    if(item.successful === false) return;
    const date = new Date(item.date).getTime();
    line_chart2_hashmap.set(date, (line_chart2_hashmap.get(date) || 0) + 1);
    });

    const sortedData: IChartDecimation[] = Array.from(line_chart2_hashmap.entries())
    .sort((a, b) => a[0] - b[0]) // Sort by date
    .map(([timestamp, count]) => ({
    x: timestamp, // Convert timestamp to "YYYY-MM-DD"
    y: count
    }));
    return sortedData;
}


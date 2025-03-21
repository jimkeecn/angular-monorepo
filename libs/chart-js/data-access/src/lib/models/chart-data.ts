export interface IData{
    company: string;
    date: Date;
    location: string;
    mission: string;
    price: number;
    rocket: string;
    successful: boolean;
    time: string;
}


export interface IChart{
    data: any[];
    labels: string[];
}

export interface IChartDecimation{
    x: any;
    y: any;
}


export interface ChartDataState {
    data: IData[];
    pieChart: IChart | null;
    barChart: IChart | null;
    lineChart: IChart | null;
    lineChart2: IChartDecimation[] | null;
}

export const CHART_JS_FEATURE_KEY = 'chartJs';

export const initialState: ChartDataState = {
    data: [],
    pieChart: null,
    barChart: null,
    lineChart: null,
    lineChart2: null,
};
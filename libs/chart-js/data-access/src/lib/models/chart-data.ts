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
interface ChartDataSeries {
    name: string;
    data: number[];
}

interface ChartData {
    colors: string[];
    series: ChartDataSeries[];
}

export interface ProgressBarChartsProps {
    index: number;
    chartData: ChartData;
}
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { orderStatusChart } from '../../../../Data/Widgets/Chart';
import { ProgressBarChartsProps } from '../../../../Types/Widgets.type';

export default function ProgressBarCharts({ index, chartData }: ProgressBarChartsProps) {
    const updatedOption = {
        ...orderStatusChart,
        options: {
            ...orderStatusChart,
            fill: {
                ...orderStatusChart.fill,
                colors: chartData.colors,
                gradient: {
                    ...orderStatusChart.fill?.gradient,
                    gradientToColors: chartData.colors,
                },
            },
            title: {
                ...orderStatusChart.title,
                text: chartData.series[0].name,
            },
            subtitle: {
                ...orderStatusChart.subtitle,
                text: ` ${chartData.series[0].data[0]}%`,
            },
        },
    };
    return (
        <div id={`progress${index + 1}`}>
            <ReactApexChart height={70} type="bar" options={updatedOption.options} series={chartData.series} />
        </div>
    )
}
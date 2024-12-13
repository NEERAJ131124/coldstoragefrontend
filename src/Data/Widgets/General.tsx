import { ApexOptions } from "apexcharts";
import { ItemsSliderItems, ValueChartItems } from "../../Types/Dashboard.type";
import { dynamicImage } from "../../Utils";

//charts
export var generalSalesChart: ApexOptions = {
    series: [
        {
            name: "Statistics",
            data: [80, 40, 50, 30, 60, 20, 10],
        },
        {
            name: "Statistics",
            data: [20, 60, 50, 70, 40, 80, 5],
        },
    ],
    chart: {
        type: "bar",
        height: 110,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 2,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#D5E8E6", "#308e87",],
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1661,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1300,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 670,
            options: {
                chart: {
                    offsetX: -30,
                },
            },
        },
    ],
};

export var generalVisitorChart: ApexOptions = {
    series: [
        {
            name: "Statistics",
            data: [80, 40, 50, 30, 60, 20, 10],
        },
        {
            name: "Statistics",
            data: [20, 60, 50, 70, 40, 80, 5],
        },
    ],
    chart: {
        type: "bar",
        height: 110,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 0,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#faded1", "#f39159",],
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1661,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1300,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 670,
            options: {
                chart: {
                    offsetX: -30,
                },
            },
        },
    ],
};

export var generalInvestChart: ApexOptions = {
    series: [76, 67, 61, 90],
    chart: {
        height: 300,
        type: "radialBar",
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined,
            },
            dataLabels: {
                name: {
                    fontSize: "22px",
                },
                value: {
                    fontSize: "16px",
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w) {
                        return '249';
                    },
                },
            },
            track: {
                background: "var(--body-color)",
            },
        },
    },

    colors: ['#308e87', '#f39159', "#ea9200", "#e74b2b",
    ],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
        labels: {
            useSeriesColors: true,
        },
        formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
            vertical: 2,
        },
    },
    responsive: [
        {
            breakpoint: 1445,

            options: {
                chart: {
                    offsetX: -10,
                },
                legend: {
                    show: false,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 2,
                            size: "20%",
                        },
                        dataLabels: {
                            total: {
                                show: false,
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1435,

            options: {
                chart: {
                    offsetX: 10,
                },
            },
        },
        {
            breakpoint: 1430,

            options: {
                chart: {
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1400,

            options: {
                chart: {
                    height: 250,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1240,

            options: {
                chart: {
                    height: 235,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 300,
                    offsetX: -10,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 5,
                            size: "30%",
                        },
                        dataLabels: {
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
        },
    ],
};

export const generalSalesStats: ApexOptions = {
    series: [70],
    chart: {
        height: 345,
        type: "radialBar",
        offsetY: 0,
    },

    stroke: {
        dashArray: 20,
        curve: "smooth",
        lineCap: "round",
    },
    grid: {
        padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: "75%",
                image: dynamicImage(`apexchart/radial-image.png`),
                imageWidth: 200,
                imageHeight: 200,
                imageClipped: false,
            },
            track: {
                show: true,
                background: "var(--body-color)",
                strokeWidth: "97%",
                opacity: 0.4,
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: "20px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#292929",
                    offsetY: 6,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
            },
        },
    },
    labels: ["Selling rate", "Returning: 3.2k"],
    colors: ['#308e87', '#f39159'],
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1621,
            options: {
                chart: {
                    height: 340,
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        hollow: {
                            size: "75%",
                            image: dynamicImage(`apexchart/radial-image.png`),
                            imageWidth: 170,
                            imageHeight: 170,
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1581,
            options: {
                chart: {
                    height: 300,
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "14px",
                            },
                            value: {
                                fontSize: "16px",
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 531,
            options: {
                chart: {
                    height: 300,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%",
                            imageWidth: 150,
                            imageHeight: 150,
                        },
                    },
                },
            },
        },
        {
            breakpoint: 426,
            options: {
                chart: {
                    height: 280,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%",
                            imageWidth: 100,
                            imageHeight: 100,
                        },
                    },
                },
            },
        },
    ],
};

export var orderChart: ApexOptions = {
    series: [
        {
            name: "Daily",
            data: [
                2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3,
                1.1,
            ],
        },
        {
            name: "Weekly",
            data: [
                -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3,
                -2, -2.15, -3, -1.1,
            ],
        },
        {
            name: "Monthly",
            data: [
                -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1,
                -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75,
            ],
        },
        {
            name: "Yearly",
            data: [
                2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25,
                3.1, 3.0, 2.95, 2.85, 2.75,
            ],
        },
    ],
    chart: {
        type: "bar",
        width: 180,
        height: 120,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
            barHeight: "80%",
        },
    },
    colors: [
        '#308e87',
        '#308e87',
        "var(--body-color)",
        "var(--body-color)",
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0,
    },
    legend: {
        show: false,
    },
    grid: {
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        min: -5,
        max: 5,
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        shared: false,
        x: {
            show: false,
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        offsetX: 0,
        offsetY: 0,
        labels: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        axisBorder: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        axisTicks: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1760,
            options: {
                chart: {
                    width: 160,
                },
            },
        },
        {
            breakpoint: 1601,
            options: {
                chart: {
                    height: 110,
                },
            },
        },
        {
            breakpoint: 1560,
            options: {
                chart: {
                    width: 140,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                chart: {
                    width: 120,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1110,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
        {
            breakpoint: 700,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 220,
                },
            },
        },
        {
            breakpoint: 420,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
    ],
};

export var profitChart: ApexOptions = {
    series: [
        {
            name: "Desktops",
            data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
        },
    ],
    chart: {
        width: 200,
        height: 140,
        type: "line",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#f39159',
            opacity: 0.3,
        },
        zoom: {
            enabled: false,
        },
    },
    colors: ['#f39159'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        marker: {
            show: false,
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1780,
            options: {
                chart: {
                    width: 180,
                },
            },
        },
        {
            breakpoint: 1680,
            options: {
                chart: {
                    width: 160,
                },
            },
        },
        {
            breakpoint: 1601,
            options: {
                chart: {
                    height: 110,
                },
            },
        },
        {
            breakpoint: 1560,
            options: {
                chart: {
                    width: 140,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                chart: {
                    width: 120,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1110,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
        {
            breakpoint: 700,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 220,
                },
            },
        },
        {
            breakpoint: 420,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
    ],
};

//data
export const valueChartData: ValueChartItems[] = [
    {
        id: 1,
        colclass: 'col-xl-12 col-lg-12',
        badge: '80',
        color: 'primary',
        rate: '3,76,793',
        text: 'Our Sale Value',
        chartClass: 'sales',
        chart: {
            ...generalSalesChart,
            series: generalSalesChart.series,
            type: generalSalesChart.chart?.type,
            height: generalSalesChart.chart?.height,
        },
    },
    {
        id: 2,
        colclass: 'col-xl-12 col-lg-12',
        badge: '60',
        color: 'secondary',
        rate: '4,26,876',
        text: 'Today Stock Value',
        chartClass: 'visitor',
        chart: {
            ...generalVisitorChart,
            series: generalVisitorChart.series,
            type: generalVisitorChart.chart?.type,
            height: generalVisitorChart.chart?.height,
        },
    }
];

export const itemsSliderData: ItemsSliderItems[] = [
    {
        id: 1,
        colClass: 'col-xl-3',
        slider: [
            {
                id: 1,
                color: 'primary',
                image: '1.png',
                title: 'Special Offer',
                text: 'Smart Design Watch Multi Color',
                price: '26.00',
                discount: '30.00',

            },
            {
                id: 2,
                color: 'secondary',
                image: '2.png',
                title: 'Weekend Sale',
                text: 'AirPods 3rd Generation Silicone Skin',
                price: '16.00',
                discount: '30.00',

            }
        ]
    },
    {
        id: 2,
        colClass: 'col-xl-3',
        slider: [
            {
                id: 1,
                color: 'secondary',
                image: '2.png',
                title: 'Weekend Sale',
                text: 'AirPods 3rd Generation Silicone Skin',
                price: '16.00',
                discount: '30.00',

            },
            {
                id: 2,
                color: 'primary',
                image: '1.png',
                title: 'Special Offer',
                text: 'Smart Design Phone Multi Color',
                price: '26.00',
                discount: '30.00',

            }
        ]
    }
];

export const widgetContentData = [
    {
        id: 1,
        color: 'danger',
        icon: 'cart',
        rate: '10,000',
        text: 'Purchase',
        arrow: 'up',
        percent: '+50'
    },
    {
        id: 2,
        color: 'primary',
        icon: 'tag',
        rate: '4,200',
        text: 'Sales',
        arrow: 'up',
        percent: '+70'
    },
    {
        id: 3,
        color: 'secondary',
        icon: 'return-box',
        rate: '7000',
        text: 'Sales return',
        arrow: 'down',
        percent: '-20'
    },
    {
        id: 4,
        color: 'success',
        icon: 'rate',
        rate: '5700',
        text: 'Purchase rate',
        arrow: 'up',
        percent: '+70'
    }
];

export const smallWidgetData = [
    {
        id: 1,
        color: 'primary',
        text: 'New Orders',
        arrow: 'up',
        rate: '2,435',
        percent: '+50',
        icon: 'new-order'
    },
    {
        id: 2,
        color: 'warning',
        text: 'New Customers',
        arrow: 'up',
        rate: '2,908',
        percent: '+20',
        icon: 'customers'
    },
    {
        id: 3,
        color: 'secondary',
        text: 'Average Sale',
        arrow: 'down',
        rate: '$389k',
        percent: '-10',
        icon: 'sale'
    },
    {
        id: 4,
        color: 'success',
        text: 'Gross Profit',
        arrow: 'up',
        rate: '$3,908',
        percent: '+80',
        icon: 'profit'
    }
];

export const widgetWithChart = [
    {
        id: 1,
        rate: '1,80',
        text: 'Orders',
        chartClass: 'order',
        chart: {
            ...orderChart,
            series: orderChart.series,
            type: orderChart.chart?.type,
            height: orderChart.chart?.height,
            width: orderChart.chart?.width,
        },
    },
    {
        id: 2,
        rate: '6,90',
        text: 'Profit',
        chartClass: 'profit',
        chart: {
            ...profitChart,
            series: profitChart.series,
            type: profitChart.chart?.type,
            height: profitChart.chart?.height,
            width: profitChart.chart?.width,
        },
    }
]
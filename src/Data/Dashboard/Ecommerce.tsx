import { ApexOptions } from "apexcharts";
import { ItemsSliderItems, ValueChartItems } from "../../Types/Dashboard.type";
import { dynamicImage } from "../../Utils";

//chart
export const chartSchoolPerformance: ApexOptions = {
    series: [
        {
            name: "series1",
            data: [2.8, 4.2, 2.9, 3, 4, 4.8, 3.3, 4, 4, 3.6],
        },
        {
            name: "series2",
            data: [2, 6, 5, 4.3, 2, 1.8, 2.2, 3, 3, 2.6],
        },
    ],
    chart: {
        height: 270,
        toolbar: {
            show: false,
        },
    },
    fill: {
        type: 'solid',
        opacity: 0,
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#f39159', '#308e87'],
    stroke: {
        curve: "smooth",
        width: 5,
    },
    grid: {
        show: true,
        borderColor: "#E5E5E5",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                fontSize: '14px',
                colors: "#AAA3A0",
            },
            formatter: (value) => {
                return `$ ${value}000`;
            },
        },
    },
    xaxis: {
        type: "category",
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
            "Oct",
        ],
        tickAmount: 18,
        labels: {
            minHeight: undefined,
            maxHeight: 28,
            offsetX: 10,
            offsetY: 0,
            style: {
                fontWeight: 500,
                fontSize: '14px',
                colors: "#AAA3A0",
            },
        },
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 361,
            options: {
                chart: {
                    height: 190,
                },
            },
        },
    ],
};

export var orderOverviewChart: ApexOptions = {
    series: [
        {
            name: "Earning",
            type: "area",
            data: [50, 60, 55, 45, 40, 45, 50, 48, 55, 40, 45, 40, 48, 50, 48, 40],
        },
    ],
    annotations: {
        points: [
            {
                x: 250, // Use the numeric index for "Feb"
                y: 45,
                marker: {
                    size: 10,
                    fillColor: "#fff",
                    strokeColor: '#308e87',
                    strokeWidth: 5,
                },
            },
        ],
    },
    chart: {
        height: 345,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: [4, 3],
        curve: "smooth",
    },
    grid: {
        show: false,
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#308e87'],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            opacityFrom: 0.9,
            opacityTo: 0,
            stops: [0, 100],
        },
    },
    xaxis: {
        tickAmount: undefined,
        tickPlacement: "String",
        offsetX: 0,
        offsetY: 0,
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
            "Oct",
            "Nov",
            "Dec",
            "",
            "",
            "",
            "",
        ],
        labels: {
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        tickAmount: 6,
        show: false,
    },
    tooltip: {
        x: {
            format: "MM",
        },
    },
    responsive: [
        {
            breakpoint: 1875,
            options: {
                annotations: {
                    points: [], // Empty array to hide annotations on smaller screens
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 365,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 370,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 250,
                },
            },
        },
    ],
};

export var orderBarChart: ApexOptions = {
    series: [
        {
            name: "Revenue",
            data: [
                60, 70, 48, 55, 48, 40, 50, 65, 52, 70, 60, 68, 50, 65, 41, 58, 70, 41,
                58, 70, 41, 58, 70, 41, 58, 70,
            ],
        },
    ],
    chart: {
        type: "bar",
        height: 250,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "60%",
        },
    },
    colors: ["#308e8733"],
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
    },
    xaxis: {
        categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
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
    fill: {
        opacity: 0.2,
    },
    tooltip: {
        enabled: false,
    },
    states: {
        normal: {
            filter: {
                type: "none",
            },
        },
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
};

export var salesChart: ApexOptions = {
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
        height: 140,
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
                    width: 135,
                    offsetX: -30,
                },
            },
        },
        {
            breakpoint: 1451,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                    height: 140,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 150,
                    height: 130,
                },
            },
        },
    ],
};

export var visitorChart: ApexOptions = {
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
        height: 140,
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
            breakpoint: 1601,
            options: {
                chart: {
                    width: 150,
                    offsetX: -30,
                },
            },
        },
        {
            breakpoint: 1451,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                    height: 140,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 150,
                    height: 130,
                },
            },
        },
    ],
};

export const salesStatsOption: ApexOptions = {
    series: [70],
    chart: {
        height: 350,
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
                imageWidth: 210,
                imageHeight: 210,
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
                    // ...fontCommon,
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
            breakpoint: 1580,
            options: {
                chart: {
                    height: 340,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "75%",
                            imageWidth: 150,
                            imageHeight: 150,
                        },
                        dataLabels: {
                            name: {
                                fontSize: "14px",
                                offsetY: -8,
                            },
                            value: {
                                fontSize: "18px",
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1535,
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "68%",
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1501,
            options: {
                chart: {
                    height: 350,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "75%",
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1370,
            options: {
                chart: {
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1321,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
    ],
};

//data
export const analyticsCardData = [
    {
        id: 1,
        color: 'primary',
        status: 'Pending',
        fontColor: 'danger',
        amount: '4,875',
        percent: '28',
        icon: 'up'
    },
    {
        id: 2,
        color: 'secondary',
        status: 'Complete',
        fontColor: 'primary',
        amount: '1,320',
        percent: '36.28',
        icon: 'down'
    }
];

export const userStatusData = [
    {
        id: 1,
        image: '01.png',
        name: 'John Deo',
        subText: '14+ Online',
        country: 'USA',
        progress: 60,
        color: 'success'
    },
    {
        id: 2,
        image: '02.png',
        name: 'Smith Lovell',
        subText: '250+ Online',
        country: 'Angola',
        progress: 40,
        color: 'warning'
    },
    {
        id: 3,
        image: '03.png',
        name: 'Jones Brooks',
        subText: '130+ Online',
        country: 'America',
        progress: 80,
        color: 'danger'
    },
    {
        id: 4,
        image: '04.png',
        name: 'Brown Acum',
        subText: '214+ Online',
        country: 'England',
        progress: 60,
        color: 'success'
    },
    {
        id: 5,
        image: '05.png',
        name: 'Evans Mayo',
        subText: '250+ Online',
        country: 'London',
        progress: 60,
        color: 'warning'
    },
    {
        id: 6,
        image: '06.png',
        name: 'Wilson Pipes',
        subText: '213+ Online',
        country: 'Austealia',
        progress: 60,
        color: 'warning'
    }
];

export const sellingProductData = [
    {
        id: 1,
        color: 'primary',
        icon: 'headphone',
        title: 'Headphones JBL JR 310 BT',
        text: 'Art.23879088',
        amount: '260.00',
        sale: '900 '
    },
    {
        id: 2,
        color: 'warning',
        icon: 'samsung-mobile',
        title: 'Samsung SM-G99B5',
        text: 'Art.72636892',
        amount: '340.00',
        sale: '20 '
    },
    {
        id: 3,
        color: 'danger',
        icon: 'tv',
        title: '4K UHD TV Samsung',
        text: 'Art.63987987',
        amount: '750.00',
        sale: '300 '
    },
    {
        id: 4,
        color: 'primary',
        icon: 'laptop',
        title: '16.5” Gaming Laptop 29...',
        text: 'Art.73497990',
        amount: '2370.00',
        sale: '300 '
    },
    {
        id: 5,
        color: 'warning',
        icon: 'filmcamera',
        title: 'Fujifilm x-s10 Kit 18-55mm',
        text: 'Art.37489799',
        amount: '2370.00',
        sale: '300 '
    },
    {
        id: 6,
        color: 'danger',
        icon: 'smartphone',
        title: 'Apple iphone 11 PRO MAX',
        text: 'Art.27389799',
        amount: '2370.00',
        sale: '300 '
    },
    {
        id: 7,
        color: 'primary',
        icon: 'bulb',
        title: 'Phillip Lightbulb',
        text: 'Art.74383789',
        amount: '2370.00',
        sale: '300 '
    }
];

export const valueChartData: ValueChartItems[] = [
    {
        id: 1,
        colclass: 'col-sm-6',
        badge: '80',
        color: 'primary',
        rate: '3,76,793',
        text: 'Our Sale Value',
        chartClass: 'sales',
        chart: {
            ...salesChart,
            series: salesChart.series,
            type: salesChart.chart?.type,
            height: salesChart.chart?.height,
        },
    },
    {
        id: 2,
        colclass: 'col-sm-6',
        badge: '60',
        color: 'secondary',
        rate: '4,26,876',
        text: 'Today Stock Value',
        chartClass: 'visitor',
        chart: {
            ...visitorChart,
            series: visitorChart.series,
            type: visitorChart.chart?.type,
            height: visitorChart.chart?.height,
        },
    }
];

export const bestSellBodyData = [
    {
        id: 1,
        image: '07.png',
        name: 'Evans Mayo',
        year: 2024,
        date: '05 Aug',
        product: 'Cap',
        country: '1.png',
        total: '5,08,653',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 2,
        image: '08.png',
        name: 'Smith Lovell',
        year: 2024,
        date: '21 March',
        product: 'Branded Shoes',
        country: '2.png',
        total: '37,2870',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 3,
        image: '09.png',
        name: 'Jones Brooks',
        year: 2024,
        date: '09 March',
        product: 'Headphone',
        country: '3.png',
        total: '3,12,233',
        status: 'Pending',
        color: 'warning'
    },
    {
        id: 4,
        image: '10.png',
        name: 'Brown Acum',
        year: 2024,
        date: '15 Aug',
        product: 'Cell Phone',
        country: '4.png',
        total: '7,48,123',
        status: 'Canceled',
        color: 'danger'
    },
    {
        id: 5,
        image: '11.png',
        name: 'Evans Mayo',
        year: 2024,
        date: '05 Feb',
        product: 'Earings',
        country: '5.png',
        total: '45,8,653',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 6,
        image: '12.png',
        name: 'Wilson Pipes',
        year: 2024,
        date: '12 Jan',
        product: 'Iphone 11',
        country: '1.png',
        total: '5,08,653',
        status: 'Completed',
        color: 'success'
    }
];

export const radialContent = [
    {
        id: 1,
        title: 'Goal Archive : ',
        text: '$81,000.000',
    },
    {
        id: 2,
        title: 'Duration: ',
        text: '9 Month',
    },
];

export const itemsSliderData: ItemsSliderItems[] = [
    {
        id: 1,
        colClass: 'col-xxl-3 col-xl-4',
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
                image: '5.png',
                title: 'Weekend Sale',
                text: 'HeadPhone 3rd Generation',
                price: '36.00',
                discount: '70.00',

            }
        ]
    },
    {
        id: 2,
        colClass: 'col-xxl-3 col-xl-4',
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
                image: '6.png',
                title: 'Special Offer',
                text: 'Smart Design Phone Multi Color',
                price: '86.00',
                discount: '60.00',

            }
        ]
    }
];

export const activityTimelineData = [
    {
        id: 1,
        color: 'primary',
        date: '30-06-2024',
        day: 'Today',
        text: 'Updated Product',
        subText: 'Quisque a consequat ante sit amet magna at volutapt.',
    },
    {
        id: 2,
        color: 'secondary',
        date: '30-06-2024',
        day: 'Today',
        text: 'Jihan Doe Just like your product',
        subText: 'Vestibulum nec mi suscipit, dapibus purus ane.',
    },
    {
        id: 3,
        color: 'primary',
        date: '25-06-2024',
        day: 'Today',
        text: 'James just like your product',
        subText: 'Vestibulum nec mi suscipit, dapibus purus ane.',
    },
    {
        id: 4,
        color: 'secondary',
        date: '25-06-2024',
        day: 'Tomorrow',
        text: 'Today Total Revenue',
        subText: 'Quisque a consequat ante sit amet magna at volutapt.',
    }
];

export const targetCardList = [
    {
        id: 1,
        title: 'Our Target',
        text: 'Completed',
    },
    {
        id: 2,
        title: 'We Archieve',
        text: 'Completed 2 Hours',
    }
]

export const recentOrdersBodyData = [
    {
        id: 1,
        image: '13.png',
        name: 'Alice Goodwin',
        product: 'Nike Tshirt',
        amount: '49.00',
        vendor: 'Palestine',
        progress: 65,
        color: 'success',
        rating: '3.6',
        votes: 45
    },
    {
        id: 2,
        image: '14.png',
        name: 'Herry Venter',
        product: 'Adidas Hat',
        amount: '30.00',
        vendor: 'Serbia',
        progress: 45,
        color: 'warning',
        rating: '2.7',
        votes: 35
    },
    {
        id: 3,
        image: '15.png',
        name: 'Loain Deo',
        product: 'Wu Sneakers',
        amount: '54.00',
        vendor: 'Islamic',
        progress: 85,
        color: 'danger',
        rating: '9.2',
        votes: 62
    },
    {
        id: 4,
        image: '16.png',
        name: 'Horen Hors',
        product: 'Puma Shorts<',
        amount: '73.00',
        vendor: 'Greece',
        progress: 75,
        color: 'success',
        rating: '6.6',
        votes: 83
    },
    {
        id: 5,
        image: '17.png',
        name: 'Fenter Jessy',
        product: 'Nike Glove',
        amount: '98.00',
        vendor: 'Central',
        progress: 65,
        color: 'warning',
        rating: '5.0',
        votes: 12
    },
    {
        id: 6,
        image: '18.png',
        name: 'Alice Venter',
        product: 'Nike Hat',
        amount: '26.00',
        vendor: 'Palestine',
        progress: 75,
        color: 'warning',
        rating: '3.0',
        votes: 86
    }
]

//data
import { ApexOptions } from "apexcharts";

//chart
export var bitcoinChart: ApexOptions = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 36.6],
                [1351424400000, 39.5],
                [1351710800000, 32.55],
                [1351870000000, 32.55],
                [1352056400000, 35.6],
                [1352342800000, 33.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 33.3],
                [1353566000000, 34.23],
                [1353632400000, 32.3],
                [1353757200000, 34.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    annotations: {
        points: [
            {
                x: new Date("03 Dec 2012").getTime(),
                y: 36.22,
                marker: {
                    size: 8,
                    fillColor: '#308e87',
                    strokeColor: "#fff",
                    strokeWidth: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "square",
        colors: undefined,
        width: 3,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
        show: false,
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
    grid: {
        show: false,
        padding: {
            top: -10,
            right: 0,
            bottom: -20,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: ['#308e87'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
};

export var rippleChart: ApexOptions = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 38.6],
                [1351424400000, 39.5],
                [1351710800000, 37.55],
                [1351870000000, 39.55],
                [1352056400000, 37.6],
                [1352342800000, 39.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 36.3],
                [1353566000000, 35.23],
                [1353632400000, 35.3],
                [1353757200000, 38.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    annotations: {
        points: [
            {
                x: new Date("22 Nov 2012").getTime(),
                y: 35.23,
                marker: {
                    size: 8,
                    fillColor: '#f39159',
                    strokeColor: "#fff",
                    strokeWidth: 5,
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
        show: false,
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
    tooltip: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            top: -10,
            right: 0,
            bottom: -20,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: ['#f39159'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
};

export var ethereumChart: ApexOptions = {
    series: [
        {
            data: [
                [1351202400000, 37.3],
                [1351338000000, 36.6],
                [1351424400000, 39.5],
                [1351710800000, 32.55],
                [1351870000000, 32.55],
                [1352056400000, 35.6],
                [1352342800000, 30.45],
                [1352629200000, 39.6],
                [1352815600000, 37.5],
                [1352924000000, 38.3],
                [1353061200000, 36.2],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353479600000, 33.3],
                [1353566000000, 34.23],
                [1353632400000, 32.3],
                [1353757200000, 34.23],
                [1353857200000, 36.3],
                [1353957200000, 38.28],
                [1354021500000, 37.1],
                [1354175600000, 39.28],
                [1354362000000, 36.22],
                [1354548400000, 36.22],
                [1354634800000, 38.55],
                [1354794000000, 36.22],
                [1354980400000, 40.5],
                [1355166800000, 40.8],
                [1355253200000, 39.5],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355885200000, 33.4],
                [1355985200000, 36.4],
                [1356085200000, 39.4],
            ],
        },
    ],
    annotations: {
        points: [
            {
                x: new Date("29 Nov 2012").getTime(),
                y: 39.28,
                marker: {
                    size: 8,
                    fillColor: "#E6B54D",
                    strokeColor: "#fff",
                    strokeWidth: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
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
        show: false,
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
    grid: {
        show: false,
        padding: {
            top: -10,
            right: 0,
            bottom: -20,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: ["#E6B54D"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
};

export const groupChartOption: ApexOptions = {
    series: [
        {
            name: "Good",
            data: [380, 600, 500, 800, 650, 480, 520, 380, 620, 400, 380, 550],
        },
        {
            name: "Very Good",
            data: [690, 500, 600, 600, 500, 650, 800, 400, 400, 550, 450, 500],
        },
    ],
    colors: ['#308e87', '#f39159'],
    chart: {
        type: "bar",
        height: 325,
        offsetX: 0,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40%",
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        borderColor: "#E5E5E5",
        position: "back",
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
            formatter: (value) => {
                return `${value}k`;
            },
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
            "Oct",
            "Nov",
            "Dec",
        ],
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1600,
            options: {
                chart: {
                    height: 360,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
                    },
                ],
            },
        },
        {
            breakpoint: 531,
            options: {
                chart: {
                    height: 200,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230],
                    },
                ],
            },
        },
    ],
};

export const revenueChartData: ApexOptions = {

    series: [80, 50, 30, 60],
    chart: {
        width: 390,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    responsive: [
        {
        breakpoint: 1330,
        options: {
            chart: {
                width: 310,
            },
        },
    },
    {
        breakpoint: 1250,
       options: {
           chart: {
            width: 310,
           },
       },
   },
   {
    breakpoint: 820,
    options: {
        chart: {
            width: 280,
        },
    },
    },
    {
        breakpoint: 768,
        options: {
            chart: {
                width: 290,
            },
    },
    },
    {
        breakpoint: 635,
        options: {
            chart: {
                width: 250,
            },
        },
    },
    ],
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "83%",
                labels: {
                    show: true,
                    name: {
                        offsetY: 4,
                    },
                    total: {
                        show: true,
                        fontSize: "20px",
                        fontFamily: "Outfit', sans-serif",
                        fontWeight: 600,
                        label: "Reading",
                        formatter: () => "80",
                    },
                },
            },
        },
    },
    labels: ['Reading', 'Writing', 'Video', 'Assignments'],
    legend: {
        position: 'bottom',
        offsetY: 0,
        height: 50,
    },
    colors: ["#308e87", "#E6B54D", "#E74B2B", "#f39159"],
}

//data
export const graphicDesignList = [
    {
        id: 1,
        md: 6,
        image: '20.png',
        title: 'Graphic Design',
        chartClass: 'bitcoin',
        chart: {
            ...bitcoinChart,
            series: bitcoinChart.series,
            type: bitcoinChart.chart?.type,
            height: bitcoinChart.chart?.height,
        },
        child: [
            {
                id: 1,
                icon: 'Document',
                text: '10 Lessons'
            },
            {
                id: 2,
                icon: 'Time-Square',
                text: '8 Hours'
            },
            {
                id: 3,
                icon: 'User3',
                text: '16 Students'
            },
            {
                id: 4,
                icon: 'Star',
                text: '3.6'
            }
        ]
    },
    {
        id: 2,
        md: 6,
        image: '21.png',
        title: 'Design Thinking',
        chartClass: 'ripple',
        chart: {
            ...rippleChart,
            series: rippleChart.series,
            type: rippleChart.chart?.type,
            height: rippleChart.chart?.height,
        },
        child: [
            {
                id: 1,
                icon: 'Document',
                text: '112 Lessons'
            },
            {
                id: 2,
                icon: 'Time-Square',
                text: '6 Hours'
            },
            {
                id: 3,
                icon: 'User3',
                text: '20 Students'
            },
            {
                id: 4,
                icon: 'Star',
                text: '5.8'
            }
        ]
    },
    {
        id: 3,
        md: 12,
        image: '22.png',
        title: 'Graphic Design',
        chartClass: 'ethereum',
        chart: {
            ...ethereumChart,
            series: ethereumChart.series,
            type: ethereumChart.chart?.type,
            height: ethereumChart.chart?.height,
        },
        child: [
            {
                id: 1,
                icon: 'Document',
                text: '18 Lessons'
            },
            {
                id: 2,
                icon: 'Time-Square',
                text: '9 Hours'
            },
            {
                id: 3,
                icon: 'User3',
                text: '10 Students'
            },
            {
                id: 4,
                icon: 'Star',
                text: '9.5'
            }
        ]
    }
];

export const upcomingCardData = [
    {
        id: 1,
        date: '15 march',
        child: [
            {
                id: 1,
                time: '09:00',
                text: 'One-line Drawing Method',
                color: 'primary'
            },
            {
                id: 2,
                time: '10:00',
                text: 'Continuous Line Drawing',
                color: 'secondary'
            }
        ]
    },
    {
        id: 2,
        date: '17 march',
        child: [
            {
                id: 1,
                time: '12:00',
                text: 'One-line Drawing Method',
                color: 'primary'
            },
            {
                id: 2,
                time: '08:00',
                text: 'Continuous Line Drawing',
                color: 'secondary'
            },
            {
                id: 3,
                time: '11:00',
                text: 'Continuous Line Drawing',
                color: 'primary'
            }
        ]
    }
];

export const performanceHeader = ['Students', 'Teachers']

export const noticeBoardData = [
    {
        id: 1,
        image: '1.png',
        title: 'Virtual STEM Clubs for 4-8 with Destina...',
    },
    {
        id: 2,
        image: '2.png',
        title: 'Art Now Series Presents Catherine...',
    },
    {
        id: 3,
        image: '3.png',
        title: 'Artistic Challenges For Your Creatie...',
    },
    {
        id: 4,
        image: '4.png',
        title: 'Weekly Photo Challenge & Critique...',
    },
    {
        id: 5,
        image: '5.png',
        title: 'Art Now Series Presents Catherine...',
    },
    {
        id: 6,
        image: '6.png',
        title: 'Virtual STEM Clubs for 4-8 with Destina...',
    }
];

export const studentDetailsBody = [
    {
        id: 1,
        image: '7.png',
        name: 'Gary Goodwin',
        product: 'Dedoh5@error.com',
        quantity: 12,
        attendance: 51,
        rating: '45/50',
        color: 'success'
    },
    {
        id: 2,
        image: '8.png',
        name: 'Ralph Venter',
        product: 'Norog95@fada.com',
        quantity: 14,
        attendance: 95,
        rating: '30/100',
        color: 'success'
    },
    {
        id: 3,
        image: '9.png',
        name: 'Edwin Deo',
        product: 'Mopot43@fada.com',
        quantity: 16,
        attendance: 94,
        rating: '45/60',
        color: 'warning'
    },
    {
        id: 4,
        image: '10.png',
        name: 'Aaron Hors',
        product: 'Fafiya34@fada.com',
        quantity: 18,
        attendance: 62,
        rating: '26/50',
        color: 'danger'
    },
    {
        id: 5,
        image: '11.png',
        name: 'Fenter Jessy',
        product: 'Rewox6@erroe.com',
        quantity: 20,
        attendance: 91,
        rating: '80/100',
        color: 'success'
    },
    {
        id: 6,
        image: '12.png',
        name: 'Alice Hogan',
        product: 'Alice345@fada.com',
        quantity: 22,
        attendance: 93,
        rating: '45/50',
        color: 'success'
    }
];

export const newCoursesData = [
    {
        id: 1,
        image: '13.png',
        name: 'Gary Goodwin',
        text: 'Elementary',
        class: 30,
        time: 60,
        left: 5
    },
    {
        id: 2,
        image: '14.png',
        name: 'Ralph Venter',
        text: 'Advanced',
        class: 34,
        time: 45,
        left: 2
    },
    {
        id: 3,
        image: '15.png',
        name: 'Edwin Deo',
        text: 'Advanced',
        class: 87,
        time: 23,
        left: 4
    },
    {
        id: 4,
        image: '16.png',
        name: 'Aaron Hors',
        text: 'Elementary',
        class: 12,
        time: 56,
        left: 9
    },
    {
        id: 5,
        image: '17.png',
        name: 'Fenter Jessy',
        text: 'Art.3748979',
        class: 65,
        time: 60,
        left: 1
    },
    {
        id: 6,
        image: '18.png',
        name: 'Alice Hogan',
        text: 'Art.2738979',
        class: 43,
        time: 78,
        left: 6
    },
    {
        id: 7,
        image: '19.png',
        name: 'Aaron Hors',
        text: 'Art.7438378',
        class: 20,
        time: 40,
        left: 5
    }
];

export const toDoListData = [
    {
        id: 1,
        color: 'primary',
        title: 'Complete English test',
        text: 'Complete english test',
        time: '2 hours'
    },
    {
        id: 2,
        color: 'secondary',
        title: 'Prepare for History exam',
        text: 'Complete english test',
        time: '4 hours',
        check: true
    },
    {
        id: 3,
        color: 'danger',
        title: 'Finish Digital Art project',
        text: 'Make the adjustments',
        time: '6 hours'
    },
    {
        id: 4,
        color: 'info',
        title: 'Write essay Honesty is....',
        text: '2-3 pages, include at least 3...',
        time: '8 hours'
    },
    {
        id: 5,
        color: 'secondary',
        title: 'Make Presentation',
        text: 'Complete english test',
        time: '1 hours'
    },
    {
        id: 6,
        color: 'success',
        title: 'Complete English test',
        text: 'Make the adjustments',
        time: '3 hours',
        check: true
    },
    {
        id: 7,
        color: 'warning',
        title: 'Prepare for History exam',
        text: 'Complete english test',
        time: '5 hours'
    }
];

export const assignmentsBody = [
    {
        id: 1,
        image: '1.png',
        name: 'Gary Goodwin',
        subject: 'Accounts',
        startDate: '20 May',
        status: 'Completed',
        color: 'success',
        submitDate: '31 july'
    },
    {
        id: 2,
        image: '2.png',
        name: 'Ralph Venter',
        subject: 'Bus. Study',
        startDate: '10 May',
        status: 'Completed',
        color: 'success',
        submitDate: '5th Aug'
    },
    {
        id: 3,
        image: '3.png',
        name: 'Edwin Deo',
        subject: 'Mathematics',
        startDate: '30 Sep',
        status: 'Pending',
        color: 'warning',
        submitDate: '31 july'
    },
    {
        id: 4,
        image: '4.png',
        name: 'Aaron Hors',
        subject: 'Computer App',
        startDate: '13 Oct',
        status: 'Canceled',
        color: 'danger',
        submitDate: '31 May'
    },
    {
        id: 5,
        image: '5.png',
        name: 'Fenter Jessy',
        subject: 'Graphic Design',
        startDate: '25 May',
        status: 'Completed',
        color: 'success',
        submitDate: '24 Oct'
    },
    {
        id: 6,
        image: '1.png',
        name: 'Alice Hogan',
        subject: 'Design Thinking',
        startDate: '20 Feb',
        status: 'Completed',
        color: 'success',
        submitDate: '31 july'
    }
]

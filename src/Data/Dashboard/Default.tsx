import { ApexOptions } from "apexcharts";
import { CommonListComponentItems } from "../../Types/Dashboard.type";

export const monthlyDropdownList = ['Weekly', 'Monthly', 'Yearly']

//charts
export var earningsChart: ApexOptions = {
    series: [
        {
            name: "Active",
            data: [5000, 6000, 7800, 4000, 5000],
        },
        {
            name: "Bounce",
            data: [8000, 9600, 5600, 9000, 8000],
        },
    ],
    chart: {
        type: "bar",
        height: 225,
        offsetX: -20,
        offsetY: 10,
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "75%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 6,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        borderColor: "#e5e5e5",
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    colors: ['#f39159', '#308e87'],
    xaxis: {
        categories: ["Aug", "Sep", "Oct", "Nov", "Dec"],
        tickAmount: 4,
        tickPlacement: "between",
        labels: {
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans', sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        // categories: ["$ 2000", "$ 4000", "$ 6000", "$ 8000", "$10 000"],
        labels: {
            formatter: function (val) {
                return "$" + val;
            },
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans, sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
    },
    fill: {
        opacity: 1,
    },
    responsive: [
        {
            breakpoint: 1541,
            options: {
                chart: {
                    height: 233,
                },
                plotOptions: {
                    bar: {
                        columnWidth: "80%",
                    },
                },
                grid: {
                    padding: {
                        right: 0,
                    },
                },
            },
        },
    ],
};

export var investmentChart: ApexOptions = {
    series: [76, 67, 61, 90],
    chart: {
        height: 380,
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
    colors: [
        '#308e87',
        '#f39159',
        "#ea9200",
        "#e74b2b",
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
            breakpoint: 1711,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 1591,
            options: {
                chart: {
                    height: 320,
                },
            },
        },
        {
            breakpoint: 1481,
            options: {
                chart: {
                    height: 300,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1435,
            options: {
                chart: {
                    offsetX: -20,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 240,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 380,
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 335,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 300,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
};

export var growthChart: ApexOptions = {
    series: [
        {
            name: "Network",
            data: [
                {
                    x: "Jan",
                    y: 350,
                },
                {
                    x: "Feb",
                    y: 600,
                },
                {
                    x: "Mar",
                    y: 350,
                },
                {
                    x: "Apr",
                    y: 410,
                },
                {
                    x: "May",
                    y: 410,
                },
                {
                    x: "Jun",
                    y: 600,
                },
                {
                    x: "Jul",
                    y: 500,
                },
                {
                    x: "Aug",
                    y: 500,
                },
                {
                    x: "Sep",
                    y: 800,
                },
                {
                    x: "Oct",
                    y: 410,
                },
                {
                    x: "Nov",
                    y: 350,
                },
                {
                    x: "Dec",
                    y: 410,
                },
            ],
        },
    ],
    chart: {
        type: "area",
        height: 350,
        animations: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    grid: {
        show: true,
        borderColor: "#e5e5e5",
    },
    fill: {
        opacity: 0.8,
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [],
        },
    },
    colors: ['#308e87'],
    markers: {
        size: 6,
        colors: "var(--body-color)",
        strokeColors: '#308e87',
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 0,
        hover: {
            size: 9,
        },
    },
    tooltip: {
        intersect: true,
        shared: false,
    },
    theme: {
        palette: "palette1",
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val + "k";
            },
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans, sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans', sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
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
            breakpoint: 1400,
            options: {
                chart: {
                    height: 255,
                },
            },
        },
        {
            breakpoint: 1321,
            options: {
                chart: {
                    height: 260,
                },
            },
        },
        {
            breakpoint: 1252,
            options: {
                chart: {
                    height: 275,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 360,
                },
            },
        },
        {
            breakpoint: 481,
            options: {
                chart: {
                    height: 260,
                    offsetY: 20,
                },
            },
        },
    ],
};

//data
export const jobCardListData = [
    {
        id: 1,
        color: 'primary',
        icon: 'job-bag',
        count: 40,
        text: 'Total Jobs'
    },
    {
        id: 2,
        color: 'secondary',
        icon: 'employees',
        count: 30,
        text: 'Employees'
    },
    {
        id: 3,
        color: 'warning',
        icon: 'hours-work',
        count: 40,
        text: 'Hours of work'
    }
]

export const jobCardTableData = [
    {
        id: 1,
        time: '10:AM',
        job: 'Maintenace',
        company: 'Apple Inc.',
        employee: 'Michele Ronaldo',
        image: '1.png'
    },
    {
        id: 2,
        time: '07:AM',
        job: 'General',
        company: 'Hewlett packard',
        employee: 'Naomi watson',
        image: '2.png'
    },
    {
        id: 3,
        time: '03:AM',
        job: 'Cleaning',
        company: 'Microsoft',
        employee: 'Dann Petty',
        image: '3.png'
    },
]

export const transitionHistoryHead = ['Item Name', 'Invoice No.', 'Credit/Debit', 'Date/Time', 'Status']

export const transitionHistoryData = [
    {
        id: 1,
        image: '1.png',
        name: 'Samsung TV',
        text: 'Item Sold',
        invoice: '#px0101',
        amount: '+ $3460',
        date: 'Jan 25',
        time: '08:35:65',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 2,
        image: '2.png',
        name: 'Spring Bed',
        text: 'Bought item',
        invoice: '#rf304f',
        amount: '- $910',
        date: 'Feb 20',
        time: '12:35:00',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 3,
        image: '3.png',
        name: 'Long Dress',
        text: 'Bought item',
        invoice: '#dnj480',
        amount: '+ $4380',
        date: 'Oct 25',
        time: '04:39:08',
        status: 'Pending',
        color: 'warning'
    },
    {
        id: 4,
        image: '4.png',
        name: 'Phillip Lightbulb',
        text: 'Item Sold',
        invoice: '#g189d0',
        amount: '+ $246',
        date: 'Dec 25',
        time: '08:35:65',
        status: 'Canceled',
        color: 'danger'
    },
    {
        id: 5,
        image: '5.png',
        name: 'Sofa Hauga',
        text: 'Item Sold',
        invoice: '#31d8fs',
        amount: '- $220',
        date: 'Jan 25',
        time: '10:20:87',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 6,
        image: '6.png',
        name: 'Apple iMac 19”',
        text: 'Item Sold',
        invoice: '#g5384h',
        amount: '+ $983',
        date: 'Feb 05',
        time: '10:49:50',
        status: 'Completed',
        color: 'success'
    }
]

export const auditLogData: CommonListComponentItems[] = [
    {
        id: 1,
        image: 'checked.png',
        title: 'Route P204_salesfores created',
        text: 'Andre Sluczka',
        time: '2 hours',
        color: 'success'
    },
    {
        id: 2,
        image: 'danger.png',
        title: 'R304_salesforece undeployed',
        text: 'Fabian Beliza',
        time: '4 hours',
        color: 'warning'
    },
    {
        id: 3,
        image: 'cancel.png',
        title: 'R304_salesforece failed...',
        text: 'Michael Ganatra',
        time: '10 Jun',
        color: 'danger'
    },
    {
        id: 4,
        image: 'checked.png',
        title: 'New environment DEV created',
        text: 'Wade Warren',
        time: '22 Jun',
        color: 'success'
    },
    {
        id: 5,
        image: 'checked.png',
        title: 'Project salesforce created',
        text: 'Bessie Cooper',
        time: '10 july',
        color: 'success'
    },
    {
        id: 6,
        image: 'danger.png',
        title: 'G202_Salesforce undeployed',
        text: 'Andre Sluczka',
        time: '22 Jun',
        color: 'warning'
    }
]

export const investmentListData = [
    {
        id: 1,
        text: 'Total',
        amount: '45,9760'
    },
    {
        id: 2,
        text: 'Monthly',
        amount: '12,263'
    },
    {
        id: 3,
        text: 'Daily',
        amount: '32600'
    }
]

export const growthCardData = ['Yearly', 'Monthly', 'Weekly']
export const latestActivityData: CommonListComponentItems[] = [
    {
        id: 1,
        iconColor: 'primary',
        icon: 'box',
        title: 'Added new repository',
        text: 'Fabpot/symfony-docker',
        time: '2 hours',
        color: 'light-primary border-light-primary'
    },
    {
        id: 2,
        iconColor: 'warning',
        icon: 'dolar',
        title: 'Added new work',
        text: 'Private Contributions',
        time: '4 hours',
        color: 'light-warning border-light-warning'
    },
    {
        id: 3,
        iconColor: 'danger',
        icon: 'round-right',
        title: 'Review',
        text: 'Reviewed repositories',
        time: '10 Jun',
        color: 'light-danger border-light-danger'
    },
    {
        id: 4,
        iconColor: 'primary',
        icon: 'pie-chart',
        title: 'Upload documents',
        text: 'Development Startup',
        time: '22 Jun',
        color: 'light-primary border-light-primary'
    },
    {
        id: 5,
        iconColor: 'warning',
        icon: 'globe',
        title: 'Opened issue',
        text: 'Private Contributions',
        time: '10 july',
        color: 'light-warning border-light-warning'
    },
    {
        id: 6,
        iconColor: 'none',
        icon: 'box-user',
        title: 'Customer added by @jhon',
        text: 'Fabpot/symfony-docker',
        time: '26 Jun',
        color: 'light-danger border-light-danger'
    },
    {
        id: 7,
        iconColor: 'primary',
        icon: 'work-bag',
        title: 'Added new work',
        text: 'Contributions repositories',
        time: '22 Jun',
        color: 'light-primary border-light-primary'
    }
]

export const topUsersData = [
    {
        id: 1,
        image: '01.png',
        name: 'Alice Goodwin',
        color: 'success',
        status: 'Completed',
        amount: '250.00'
    },
    {
        id: 2,
        image: '02.png',
        name: 'Smith Lovell',
        color: 'success',
        status: 'Completed',
        amount: '682.00'
    },
    {
        id: 3,
        image: '03.png',
        name: 'Jones Brooks',
        color: 'warning',
        status: 'Pending',
        amount: '387.00'
    },
    {
        id: 4,
        image: '04.png',
        name: 'Brown Acum',
        color: 'danger',
        status: 'Canceled',
        amount: '355.00'
    },
    {
        id: 5,
        image: '05.png',
        name: 'Evans Mayo',
        color: 'success',
        status: 'Completed',
        amount: '584.00'
    },
    {
        id: 6,
        image: '06.png',
        name: 'Wilson Pipes',
        color: 'success',
        status: 'Completed',
        amount: '954.00'
    },
    {
        id: 7,
        image: '07.png',
        name: 'Alice Pindar',
        color: 'danger',
        status: 'Canceled',
        amount: '756.00'
    }
]

export const NewsUpdateData = [
    {
        id: 1,
        image: '1.png',
        title: 'Google project apply reviwe',
        text: 'Today’s news headlines,Breaking...',
        time: '2 hours'
    },
    {
        id: 2,
        image: '2.png',
        title: 'Business logo create',
        text: 'check out the latest news from...',
        time: '4 hours'
    },
    {
        id: 3,
        image: '3.png',
        title: 'Business project research',
        text: 'News in english: get all Breaking...',
        time: '6 hours'
    },
    {
        id: 4,
        image: '4.png',
        title: 'Recruitment in it Department',
        text: 'Technology and indian business',
        time: '8 hours'
    },
    {
        id: 5,
        image: '5.png',
        title: 'Business project research',
        text: 'Contributions private repositories',
        time: '1 hours'
    },
    {
        id: 6,
        image: '6.png',
        title: 'Submit riverfront project',
        text: 'Check out the latest news from...',
        time: '3 hours'
    },
    {
        id: 7,
        image: '7.png',
        title: 'Added new work',
        text: 'Today’s news headlines,Breaking...',
        time: '5 hours'
    }
]

//charts
export var incomeChart: ApexOptions = {
    series: [46],
    chart: {
        type: "radialBar",
        offsetY: -10,
        height: 600,
        sparkline: {
            enabled: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "rgba(48, 142, 135, 0.12)",
                strokeWidth: "100%",
            },
            dataLabels: {
                name: {
                    show: true,
                    offsetY: -20,
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#292929",
                },
                value: {
                    offsetY: -10,
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#AAA3A0",
                },
            },
        },
        bar: {
            horizontal: false,
            dataLabels: {
                position: "bottom",
            },
        },
    },
    labels: ["March. 2024"],
    stroke: {
        lineCap: "round",
    },
    colors: ['#308e87'],
    responsive: [
        {
            breakpoint: 1557,
            options: {
                chart: {
                    height: 365,
                },
            },
        },
        {
            breakpoint: 1491,
            options: {
                chart: {
                    height: 330,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 380,
                },
            },
        },
        {
            breakpoint: 1240,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 400,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
    ],
};

//data
export const manageInvoiceBodyData = [
    {
        id: 1,
        clinet: 'Comelune',
        date: '27 Nov',
        payment: 'Private',
        idNo: '9605',
        amount: '2,500',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 2,
        clinet: 'Diagnos',
        date: '30 Nov',
        payment: 'Bill Payment',
        idNo: '9548',
        amount: '4,560',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 3,
        clinet: 'Saturan',
        date: '27 Jun',
        payment: 'Bill Payment',
        idNo: '2950',
        amount: '4,876',
        status: 'Pending',
        color: 'warning'
    },
    {
        id: 4,
        clinet: 'Williams',
        date: '16 Dec',
        payment: 'Private',
        idNo: '1552',
        amount: '3,876',
        status: 'Canceled',
        color: 'danger'
    },
    {
        id: 5,
        clinet: 'Davies',
        date: '10 Nov',
        payment: 'Bill Payment',
        idNo: '9567',
        amount: '2,986',
        status: 'Completed',
        color: 'success'
    },
    {
        id: 6,
        clinet: 'Smith',
        date: '30 Nov',
        payment: 'Private',
        idNo: '8992',
        amount: '6,789',
        status: 'Completed',
        color: 'success'
    }
]

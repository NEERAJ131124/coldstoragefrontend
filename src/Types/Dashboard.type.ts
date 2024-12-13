export interface TransitionHistoryBodyProps {
    filterText: string;
}

export interface DashboardDropdownProps {
    dropDownList: string[];
    dropDownTitle?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
    start?: boolean;
    end?: boolean;
}

interface ValueChartOptions {
    series: any;
    type: any;
    height: number | string | undefined;
}

export interface ValueChartItems {
    id: number;
    badge: string;
    color: string;
    rate: string;
    text: string;
    chartClass: string;
    chart: ValueChartOptions;
    colclass: string;
}

export interface ValueChartProps {
    mainColClass: string;
    data: ValueChartItems[]
}

export interface RadialCardProps {
    height: number;
    chartData: any;
    colClass: string;
    mainColClass: string;
}

interface SliderItems {
    id: number;
    color: string;
    image: string;
    title: string;
    text: string;
    price: string;
    discount: string
}

export interface ItemsSliderItems {
    id: number;
    colClass: string
    slider: SliderItems[]
}

export interface SliderContentProp {
    list: SliderItems
}

export interface ItemsSliderProp {
    data: ItemsSliderItems[]
}

export interface UpcomingCardProps {
    colClass: string;
    cardClass?: string
}
export interface TotalInvestmentProps {
    bodyClass?: string
    colClass: string
    investmentList?: boolean
    height: number
    chartData: any
}

export interface CommonListComponentItems {
    id: number
    color: string
    image?: string
    iconColor?: string
    icon?: string
    title: string
    text: string
    time: string
}

export interface CommonListComponentProps {
    colClass: string
    title: string
    bodyClass: string
    data: CommonListComponentItems[]
}

export interface GrowthCardProps {
    colClass: string
    cardClass?: string
    height: number
    chartClass?: string
}

interface ValueChartOptions {
    series: any;
    type: any;
    height: number | string | undefined;
}

export interface ValueChartItems {
    id: number;
    badge: string;
    color: string;
    rate: string;
    text: string;
    chartClass: string;
    chart: ValueChartOptions;
    colclass: string;
}

export interface ValueChartProps {
    mainColClass: string;
    data: ValueChartItems[]
}

export interface RadialCardProps {
    height: number;
    chartData: any;
    colClass: string;
    mainColClass: string;
}

interface SliderItems {
    id: number;
    color: string;
    image: string;
    title: string;
    text: string;
    price: string;
    discount: string
}

export interface ItemsSliderItems {
    id: number;
    colClass: string
    slider: SliderItems[]
}

export interface SliderContentProp {
    list: SliderItems
}

export interface ItemsSliderProp {
    data: ItemsSliderItems[]
}

export interface UpcomingCardProps {
    colClass: string;
    cardClass?: string
}

export interface ScheduleLessonProp {
    colClass: string;
}
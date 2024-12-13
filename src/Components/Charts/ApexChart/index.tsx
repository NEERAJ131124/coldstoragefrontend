import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicAreaChart from './BasicAreaChart'
import AreaSpalineChart from './AreaSpalineChart'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import BubbleChart from './BubbleChart'
import SteplineChart from './SteplineChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import DonutChart from './DonutChart'
import MixedChart from './MixedChart'
import CandlestickChart from './CandlestickChart'
import RadarChart from './RadarChart'
import RadialBarChart from './RadialBarChart'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ApexChartTitle, ChartsTitle } from '../../../Utils/Constants'

export default function ApexChartContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ApexChartTitle} parent={ChartsTitle} title={ApexChartTitle} />
            <Container fluid>
                <Row>
                    <BasicAreaChart />
                    <AreaSpalineChart />
                    <BarChart />
                    <ColumnChart />
                    <BubbleChart />
                    <SteplineChart />
                    <LineChart />
                    <PieChart />
                    <DonutChart />
                    <MixedChart />
                    <CandlestickChart />
                    <RadarChart />
                    <RadialBarChart /> 
                </Row>
            </Container>
        </>
    )
}
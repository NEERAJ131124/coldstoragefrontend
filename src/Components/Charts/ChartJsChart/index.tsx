import React from 'react'
import { Container, Row } from 'reactstrap'
import BarChart from './BarChart'
import LineGraph from './LineGraph'
import RadarGraph from './RadarGraph'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'
import PolarChart from './PolarChart'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ChartJsChartTitle, ChartsTitle } from '../../../Utils/Constants'

export default function ChartJsChartContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ChartJsChartTitle} parent={ChartsTitle} title={ChartJsChartTitle} />
            <Container fluid>
                <Row>
                    <BarChart />
                    <LineGraph />
                    <RadarGraph />
                    <LineChart />
                    <DoughnutChart />
                    <PolarChart />
                </Row>
            </Container>
        </>
    )
}
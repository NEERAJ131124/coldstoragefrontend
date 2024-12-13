import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { RadialBarChartTitle } from '../../../../Utils/Constants'
import { radialBarChart } from '../../../../Data/Charts/ApexChart'

export default function RadialBarChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={RadialBarChartTitle} />
                <CardBody>
                    <div id="circlechart">
                        <ReactApexChart options={radialBarChart} series={radialBarChart.series} type="radialBar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
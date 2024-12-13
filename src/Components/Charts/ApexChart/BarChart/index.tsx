import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BarChartTitle } from '../../../../Utils/Constants'
import { barChart } from '../../../../Data/Charts/ApexChart'

export default function BarChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={BarChartTitle} />
                <CardBody>
                    <div id="basic-bar">
                        <ReactApexChart options={barChart} series={barChart.series} type="bar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

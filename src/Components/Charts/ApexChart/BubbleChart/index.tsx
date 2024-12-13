import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BubbleChartTitle } from '../../../../Utils/Constants'
import { bubbleChart } from '../../../../Data/Charts/ApexChart'

export default function BubbleChart() {
    return (
        <Col sm={12} xl={6} className="box-col-12">
            <Card>
                <CommonCardHeader title={BubbleChartTitle} />
                <CardBody>
                    <div id="chart-bubble">
                        <ReactApexChart options={bubbleChart} series={bubbleChart.series} type="bubble" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

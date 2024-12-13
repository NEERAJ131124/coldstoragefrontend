import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DonutChartTitle } from '../../../../Utils/Constants'
import { donutChart } from '../../../../Data/Charts/ApexChart'

export default function DonutChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={DonutChartTitle} />
                <CardBody className='apex-chart'>
                    <div id="donutchart">
                        <ReactApexChart options={donutChart} series={donutChart.series} type="donut" width={380} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
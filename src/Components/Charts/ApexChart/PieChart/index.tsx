import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PieChartTitle } from '../../../../Utils/Constants'
import { pieChart } from '../../../../Data/Charts/ApexChart'

export default function PieChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={PieChartTitle} />
                <CardBody className='apex-chart'>
                    <div id="piechart">
                        <ReactApexChart options={pieChart} series={pieChart.series} type="pie" width={380} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
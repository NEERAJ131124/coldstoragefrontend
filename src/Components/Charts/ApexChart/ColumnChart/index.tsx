import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ColumnChartTitle } from '../../../../Utils/Constants'
import { columnChart } from '../../../../Data/Charts/ApexChart'

export default function ColumnChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={ColumnChartTitle} />
                <CardBody>
                    <div id="column-chart">
                        <ReactApexChart options={columnChart} series={columnChart.series} type="bar" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

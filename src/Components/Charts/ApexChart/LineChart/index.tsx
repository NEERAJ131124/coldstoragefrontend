import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ColumnChartTitle } from '../../../../Utils/Constants'
import { lineWithAnnotationChart } from '../../../../Data/Charts/ApexChart'

export default function LineChart() {
    return (
        <Col sm={12} xl={12} className="box-col-6">
            <Card>
                <CommonCardHeader title={ColumnChartTitle} />
                <CardBody>
                    <div id="annotationchart">
                        <ReactApexChart options={lineWithAnnotationChart} series={lineWithAnnotationChart.series} type="line" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

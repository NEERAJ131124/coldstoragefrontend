import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MixedChartTitle } from '../../../../Utils/Constants'
import { mixedChart } from '../../../../Data/Charts/ApexChart'

export default function MixedChart() {
    return (
        <Col sm={12} xl={12} className="box-col-12">
            <Card>
                <CommonCardHeader title={MixedChartTitle} />
                <CardBody>
                    <div id="mixedchart">
                        <ReactApexChart options={mixedChart} series={mixedChart.series} type="line" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

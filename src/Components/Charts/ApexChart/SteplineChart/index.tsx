import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SteplineChartTitle } from '../../../../Utils/Constants'
import ReactApexChart from 'react-apexcharts'
import { steplineChart } from '../../../../Data/Charts/ApexChart'

export default function SteplineChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={SteplineChartTitle} />
                <CardBody>
                    <div id="stepline">
                        <ReactApexChart options={steplineChart} series={steplineChart.series} type="line" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

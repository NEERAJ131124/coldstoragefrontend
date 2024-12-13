import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Bar } from 'react-chartjs-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BarChartTitle } from '../../../../Utils/Constants'
import { barChartData, barChartOptions } from '../../../../Data/Charts/ChartJsChart'

export default function BarChart() {
    return (
        <Col xl={6} md={12} className='box-col-12'>
            <Card>
                <CommonCardHeader title={BarChartTitle} />
                <CardBody className="chart-block">
                    <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
                </CardBody>
            </Card>
        </Col>
    )
}
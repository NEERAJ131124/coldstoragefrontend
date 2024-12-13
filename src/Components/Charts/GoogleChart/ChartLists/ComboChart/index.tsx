import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ComboChartTitle } from '../../../../../Utils/Constants'
import { comboChartData, comboChartOption } from '../../../../../Data/Charts/GoogleChart'

export default function ComboChart() {
    return (
        <Col sm={12} className='box-col-12'>
            <Card>
                <CommonCardHeader title={ComboChartTitle} />
                <CardBody className="chart-block">
                    <div className="chart-overflow">
                        <Chart
                            width={"100%"}
                            height={500}
                            chartType={"ComboChart"}
                            loader={<div>{"Loading Chart"}</div>}
                            data={comboChartData}
                            options={comboChartOption}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

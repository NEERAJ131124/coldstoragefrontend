import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { GanttChartTitle } from '../../../../../Utils/Constants'
import { ganttChartData, ganttChartOptions } from '../../../../../Data/Charts/GoogleChart'

export default function GanttChart() {
    return (
        <Col sm={12} className="box-col-12">
            <Card>
                <CommonCardHeader title={GanttChartTitle} />
                <CardBody className="chart-block">
                    <div className="chart-overflow">
                        <Chart
                            chartType={"Gantt"}
                            width='100%'
                            height={300}
                            loader={<div>{"Loading Chart"}</div>}
                            data={ganttChartData}
                            options={ganttChartOptions}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

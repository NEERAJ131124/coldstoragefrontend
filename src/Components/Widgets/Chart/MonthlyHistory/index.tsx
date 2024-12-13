import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { MonthlyHistoryTitle } from '../../../../Utils/Constants'
import { monthlyHistoryOptions } from '../../../../Data/Widgets/Chart'

export default function MonthlyHistory() {
    return (
        <Col md={12} className="box-col-12">
            <Card className="overflow-hidden">
                <CommonCardHeader title={MonthlyHistoryTitle} />
                <div className="bar-chart-widget">
                    <CardBody className="bottom-content">
                        <Row>
                            <Col xs={12}>
                                <div id="chart-widget4">
                                    <ReactApexChart options={monthlyHistoryOptions} series={monthlyHistoryOptions.series} type='bar' height={380} />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                </div>
            </Card>
        </Col>
    )
}

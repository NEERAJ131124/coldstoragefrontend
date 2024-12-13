import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { LiveProductsTitle } from '../../../../Utils/Constants'
import { liveProductsOptions } from '../../../../Data/Widgets/Chart'

export default function LiveProducts() {
    return (
        <Col xl={7} lg={12} className="xl-50">
            <div className="small-chart-widget chart-widgets-small">
                <Card>
                    <CommonCardHeader title={LiveProductsTitle} />
                    <CardBody>
                        <div className="chart-container">
                            <Row>
                                <Col xs={12}>
                                    <div id="chart-widget6">
                                        <ReactApexChart options={liveProductsOptions} series={liveProductsOptions.series} type='area' height={320} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}
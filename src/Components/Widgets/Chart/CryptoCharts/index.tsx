import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { cryptoChartsData } from '../../../../Data/Widgets/Chart'

export default function CryptoCharts() {
    return (
        <>
            {cryptoChartsData.map((item) => (
                <Col lg={12} xl={6} className="xl-50" key={item.id}>
                    <Card>
                        <CommonCardHeader title={item.title} />
                        <CardBody>
                            <div className={`chart-container ${item.chartClass ? item.chartClass : ''}`}>
                                <Row>
                                    <Col xs={12}>
                                        <div id={item.chartId}>
                                            <ReactApexChart options={item.chart} series={item.chart.series} type={item.chart.type} height={400} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
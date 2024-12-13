import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { Badges, H2, P } from '../../../../AbstractElements'
import { ValueChartProps } from '../../../../Types/Dashboard.type'

export default function ValueChart({ data, mainColClass }: ValueChartProps) {
    return (
        <div className={mainColClass}>
            <Row>
                {data.map((item) => (
                    <Col md={12} className={item.colclass} key={item.id}>
                        <Card className="value-chart">
                            <CardBody>
                                <Row>
                                    <Col xs={6}>
                                        <div className={`${item.chartClass}-chart`} id={`${item.chartClass}-chart`}>
                                            <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} />
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="valuechart-detail">
                                            <div className="text-center">
                                                <Badges color={item.color}>{item.badge}{'%'}</Badges>
                                                <H2>{'$'}{item.rate}</H2>
                                                <P>{item.text}</P>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
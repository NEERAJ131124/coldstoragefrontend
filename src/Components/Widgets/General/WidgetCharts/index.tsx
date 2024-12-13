import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import SmallWidget from './SmallWidget'
import { H4 } from '../../../../AbstractElements'
import { widgetWithChart } from '../../../../Data/Widgets/General'

export default function WidgetCharts() {
    return (
        <Col xxl={6} xl={7} className="box-col-12">
            <Row className="g-sm-3 height-equal-2 widget-charts">
                <SmallWidget />
                {widgetWithChart.map((item) => (
                    <Col sm={6} key={item.id}>
                        <Card className="widget-1 widget-with-chart mb-xl-0">
                            <CardBody>
                                <div>
                                    <H4 className="mb-1">{item.rate}{'k'}</H4>
                                    <span className="f-light">{item.text}</span>
                                </div>
                                <div className={`${item.chartClass}-chart`}>
                                    <div id={`${item.chartClass}chart1`}>
                                        <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} width={item.chart.width} />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
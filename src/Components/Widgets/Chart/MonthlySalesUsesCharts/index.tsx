import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { monthlySalesUsesChartData } from '../../../../Data/Widgets/Chart'

export default function MonthlySalesUsesCharts() {
    return (
        <>
            {monthlySalesUsesChartData.map((item) => (
                <Col lg={12} xl={item.xl} className={`xl-50 box-col-${item.boxColClass}`} key={item.id}>
                    <div className='small-chart-widget chart-widgets-small'>
                        <Card>
                            <CommonCardHeader title={item.title} />
                            <CardBody>
                                <div className="chart-container">
                                    <Row>
                                        <Col xs={12}>
                                            <div id={`chart-widget${item.id}`}>
                                                <ReactApexChart options={item.chart} series={item.chart.series} type={item.chart.type} height={item.chart.height} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            ))}
        </>
    )
}
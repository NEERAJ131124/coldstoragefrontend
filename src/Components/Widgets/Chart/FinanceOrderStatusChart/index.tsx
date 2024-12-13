import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import ReactApexChart from 'react-apexcharts'
import { financeOrderStatusData } from '../../../../Data/Widgets/Chart'

export default function FinanceOrderStatusChart() {
    return (
        <>
            {financeOrderStatusData.map((item) => (
                <Col lg={12} xl={item.xl} className={`box-col-${item.boxColClass}`} key={item.id}>
                    <Card>
                        <CommonCardHeader title={item.title} />
                        <CardBody>
                            <div className={`chart-container ${item.chartClass ? item.chartClass : ''}`}>
                                <div id={item.chartId}>
                                    <ReactApexChart options={item.chart} series={item.chart.series} type='line' height={350} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
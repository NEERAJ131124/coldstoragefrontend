import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { AreaSpalineChartTitle } from '../../../../Utils/Constants'
import { areaSpalineChart } from '../../../../Data/Charts/ApexChart'

export default function AreaSpalineChart() {
    return (
        <Col sm={12} xl={6} className="box-col-6">
            <Card>
                <CommonCardHeader title={AreaSpalineChartTitle} />
                <CardBody>
                    <div id="area-spaline">
                        <ReactApexChart options={areaSpalineChart} series={areaSpalineChart.series} type="area" height={350} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

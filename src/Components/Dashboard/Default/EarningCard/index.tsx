import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { EarningsTrendTitle } from '../../../../Utils/Constants'
import { earningsChart, monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H2 } from '../../../../AbstractElements'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'

export default function EarningCard() {
    return (
        <Col xxl={3} xl={4} sm={6} className="proorder-xxl-2 box-col-6">
            <Card className="earning-card">
                <DropdownWithHeader end caret headerClass='pb-0 card-no-border' heading={EarningsTrendTitle} dropDownList={monthlyDropdownList} dropDownTitle='Monthly' />
                <CardBody className="pb-0">
                    <div className="d-flex align-center gap-3">
                        <H2>{'$4,875'}</H2>
                        <span className="text-primary">
                            {'36.28% '}
                            <DashboardSvgIcon className="stroke-icon stroke-primary" iconId='arrow-down' />
                        </span>
                    </div>
                    <div id="earnings-chart">
                        <ReactApexChart type="bar" options={earningsChart} series={earningsChart.series} height={225} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { incomeChart, monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { TotalInvestTitle } from '../../../../Utils/Constants'
import DashboardSvgIcon from '../../../../Utils/CommonComponents/DashboardSvgIcon'
import { Btn, H3, P } from '../../../../AbstractElements'

export default function TotalInvest() {
    return (
        <Col xxl={3} xl={4} md={6} className="proorder-xxl-11 box-col-6">
            <Card className="height-equal">
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={TotalInvestTitle} dropDownList={monthlyDropdownList} dropDownIcon dropDownClass='icon-dropdown' />
                <CardBody className="total-invest">
                    <Row>
                        <Col xs={6} md={12} className="income-chart">
                            <div className="Incomechrt" id="Incomechrt">
                                <ReactApexChart type="radialBar" options={incomeChart} series={incomeChart.series} height={600} />
                            </div>
                        </Col>
                        <Col xs={6} md={12} className="invest-content text-center">
                            <DashboardSvgIcon className="stroke-icon" iconId='chart-invest' />
                            <Btn color='primary' className="btn-pill"> <span />{'Live'}</Btn>
                            <P className="mb-0 des-title">{'This Invest Cycle'}</P>
                            <H3>{'7,48,000'}</H3>
                            <P className="description-title">{'Current Balance this invest cycle'}</P>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
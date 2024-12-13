import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { orderBarChart, orderOverviewChart } from '../../../../Data/Dashboard/Ecommerce'
import DashboardDropdown from '../../../../Utils/CommonComponents/CommonDashboard/DashboardDropdown'
import { H3 } from '../../../../AbstractElements'

export default function SaleCard() {
    return (
        <Col xxl={3} xl={4} md={5} sm={6} className="box-col-4">
            <Card className="sale-card overflow-hidden">
                <CardHeader className="card-no-border pb-0">
                    <div className="header-top">
                        <div>
                            <H3>{'$1500.89K'}</H3><span>{'Sales last 5 Months'}</span>
                        </div>
                        <DashboardDropdown end dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                    </div>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="current-sale-container order-container">
                        <div className="overview-wrapper" id="orderoverview">
                            <ReactApexChart type="area" options={orderOverviewChart} series={orderOverviewChart.series} height={345} />
                        </div>
                        <div className="back-bar-container">
                            <div id="order-bar">
                                <ReactApexChart type="bar" options={orderBarChart} series={orderBarChart.series} height={250} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
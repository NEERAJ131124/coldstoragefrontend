import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { H3 } from '../../../../AbstractElements'
import { SalesAnalyticsTitle } from '../../../../Utils/Constants'
import { growthCardData } from '../../../../Data/Dashboard/Default'
import SaleChartBox from './SaleChartBox'
import { chartSchoolPerformance } from '../../../../Data/Dashboard/Ecommerce'

export default function AnalyticsCard() {
    const [active, setActive] = useState('Weekly')
    return (
        <Col xxl={5} xl={7} lg={12} className="box-col-7">
            <Card className="analytics-card">
                <CardHeader className="card-no-border pb-0">
                    <div className="header-top">
                        <H3>{SalesAnalyticsTitle}</H3>
                        <Nav className="simple-wrapper" id="myTab" pills>
                            {growthCardData.map((item, index) => (
                                <NavItem key={index}>
                                    <NavLink className={active === item ? 'active' : ''} onClick={() => setActive(item)}>{item}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                </CardHeader>
                <CardBody className="sale-chart-box">
                    <SaleChartBox />
                    <div id="chart-school-performance">
                        <ReactApexChart type="area" options={chartSchoolPerformance} series={chartSchoolPerformance.series} height={270} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
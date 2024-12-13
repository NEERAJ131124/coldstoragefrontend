import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { H3, LI, P, UL } from '../../../../AbstractElements'
import { SchoolPerformanceTitle } from '../../../../Utils/Constants'
import { groupChartOption, performanceHeader } from '../../../../Data/Dashboard/Project'
import { growthCardData } from '../../../../Data/Dashboard/Default'

export default function PerformanceCard() {
    const [active, setActive] = useState('Weekly')

    return (
        <Col xl={6} lg={12} className="order-xxl-0 order-xl-4 box-col-7">
            <Card className="performance-card">
                <CardHeader className="card-no-border pb-0">
                    <div className="header-top">
                        <H3>{SchoolPerformanceTitle}</H3>
                        <div className="d-flex">
                            <UL className="performance-header simple-list flex-row">
                                {performanceHeader.map((item, index) => (
                                    <LI className="me-3" key={index}>
                                        <span className={`circle bg-${index === 0 ? 'primary' : 'secondary'} me-1`} />
                                        <P className="mb-0">{item}</P>
                                    </LI>
                                ))}
                            </UL>
                            <Nav className="simple-wrapper" pills>
                                {growthCardData.map((item, index) => (
                                    <NavItem key={index}>
                                        <NavLink className={active === item ? 'active' : ''} onClick={() => setActive(item)}>{item}</NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pb-0">
                    <div id="groupBarChart">
                        <ReactApexChart type="bar" options={groupChartOption} series={groupChartOption.series} height={325} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
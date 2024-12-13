import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { H3 } from '../../../../AbstractElements'
import { MonthlyRevenueGrowth } from '../../../Constants'
import { growthCardData, growthChart } from '../../../../Data/Dashboard/Default'
import { GrowthCardProps } from '../../../../Types/Dashboard.type'

export default function GrowthCard({ colClass, cardClass, height, chartClass }: GrowthCardProps) {
    const [active, setActive] = useState('Weekly')
    return (
        <div className={colClass}>
            <Card className={cardClass ? cardClass : ''}>
                <CardHeader className="card-no-border pb-0">
                    <div className="header-top">
                        <H3>{MonthlyRevenueGrowth}</H3>
                        <Nav pills className="simple-wrapper">
                            {growthCardData.map((item, index) => (
                                <NavItem key={index}>
                                    <NavLink className={active === item ? 'active' : ''} onClick={() => setActive(item)}>{item}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                </CardHeader>
                <CardBody className="pb-0">
                    <div className={chartClass ? chartClass : ''} id="growth-chart">
                        <ReactApexChart type="area" options={growthChart} series={growthChart.series} height={height} />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
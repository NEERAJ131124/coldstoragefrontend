import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { H5, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import DashboardDropdown from '../../../../Utils/CommonComponents/CommonDashboard/DashboardDropdown'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { graphicDesignList } from '../../../../Data/Dashboard/Project'

export default function GraphicDesign() {
    return (
        <>
            {graphicDesignList.map((item) => (
                <Col xxl={4} xl={4} md={item.md} key={item.id}>
                    <Card className="graphic-design overflow-hidden">
                        <CardHeader className="card-no-border pb-0">
                            <div className="header-top">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="flex-shrink-0">
                                        <div className="icon">
                                            <Image className="img-fluid" src={dynamicImage(`dashboard-3/user/${item.image}`)} alt="chair" />
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <H5>{item.title}</H5>
                                        <P className="mb-0">{'Alice Goodwin'}</P>
                                    </div>
                                </div>
                                <DashboardDropdown dropDownClass='icon-dropdown' end dropDownIcon dropDownList={monthlyDropdownList} />
                            </div>
                        </CardHeader>
                        <CardBody className="p-0">
                            <UL className='simple-list flex-row'>
                                {item.child.map((list) => (
                                    <LI key={list.id}>
                                        <i className={`iconly-${list.icon} icli me-1`} />
                                        <H5>{list.text}</H5>
                                    </LI>
                                ))}
                            </UL>
                            <div className="crypto-dashborad-chart">
                                <div className={`${item.chartClass}-chart`} id={`${item.chartClass}-chart`}>
                                    <ReactApexChart type={item.chart.type} options={item.chart} series={item.chart.series} height={item.chart.height} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
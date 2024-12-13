import React, { Fragment } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import { H3, H4, H5, P, ProgressBar } from '../../../../AbstractElements'
import { radialContent } from '../../../../Data/Dashboard/Ecommerce'
import { RadialCardProps } from '../../../../Types/Dashboard.type'

export default function RadialCard({ chartData, height, mainColClass, colClass }: RadialCardProps) {
    return (
        <Col xxl={6} className={mainColClass}>
            <Card className="radial-card">
                <CardBody>
                    <Row>
                        <div className={`radial-chart ${colClass}`}>
                            <div className="salesStatsRadialChart" id="salesStatsRadialChart">
                                <ReactApexChart type="radialBar" options={chartData} series={chartData.series} height={height} />
                            </div>
                            <div className="content-label">
                                <P className="mb-0 font-primary">{'As From '}</P>
                                <H4>{'25 March'}</H4>
                            </div>
                        </div>
                        <div className={`radial-text ${colClass}`}>
                            <div className="radial-content">
                                <div className="text-center">
                                    <H4>{'Total Goal'}</H4>
                                    <H3>{'$92,000.30'}</H3>
                                    <hr />
                                    {radialContent.map((item) => (
                                        <Fragment key={item.id}>
                                            <H5 className="progress-widget">
                                                {item.title} <span>{item.text}</span>
                                            </H5>
                                            <ProgressBar className='sm-progress-bar progress-animate' color='gradient-primary' value={65} />
                                        </Fragment>
                                    ))}
                                    <Link to={`${process.env.PUBLIC_URL}/widgets/general`} className="btn btn-pill btn-primary" download>
                                        {'Download Details'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
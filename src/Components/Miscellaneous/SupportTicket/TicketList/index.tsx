import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CountUp from 'react-countup'
import { H3, LI, ProgressBar, UL } from '../../../../AbstractElements'
import { Loss, Profit } from '../../../../Utils/Constants'
import { ticketListData } from '../../../../Data/Miscellaneous/SupportTicket'

export default function TicketList() {
    return (
        <Row>
            {ticketListData.map((data) => (
                <Col xl={4} sm={6} className="box-col-6" key={data.id}>
                    <Card className="ecommerce-widget">
                        <CardBody className="support-ticket-font">
                            <Row>
                                <Col xs={5}>
                                    <span>{data.title}</span>
                                    <H3 className="total-num counter"><CountUp end={data.count} /></H3>
                                </Col>
                                <Col xs={7}>
                                    <div className="text-end">
                                        <UL className='simple-list'>
                                            <LI>{Profit}<span className="product-stts text-success ms-2">{'8989'}<i className="icon-angle-up f-12 ms-1"></i></span></LI>
                                            <LI>{Loss}<span className="product-stts text-danger ms-2">{'2560'}<i className="icon-angle-down f-12 ms-1"></i></span></LI>
                                        </UL>
                                    </div>
                                </Col>
                            </Row>
                            <div className="progress-showcase">
                                <ProgressBar className='sm-progress-bar' color={data.color} value='70' />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}
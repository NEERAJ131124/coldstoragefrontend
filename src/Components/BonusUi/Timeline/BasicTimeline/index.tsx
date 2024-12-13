import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicTimelineTitle } from '../../../../Utils/Constants'
import { basicTimeLineData, basicTimelineSubTitle } from '../../../../Data/BonusUi/Timeline'
import { H6, LI, P, UL } from '../../../../AbstractElements'

export default function BasicTimeline() {
    return (
        <Col xl={6} className=' box-col-6 notification main-timeline'>
            <Card>
                <CommonCardHeader title={BasicTimelineTitle} subTitle={basicTimelineSubTitle} />
                <CardBody>
                    <UL className='simple-list'>
                        {basicTimeLineData && basicTimeLineData.map((item, index) => (
                            <LI className="d-flex" key={index}>
                                <div className={`timeline-dot-${item.class}`} />
                                <div className="w-100 ms-3">
                                    <P className="d-flex justify-content-between mb-2">
                                        <span className="date-content bg-light-primary">{item.date}</span>
                                        <span>{item.time}</span>
                                    </P>
                                    <H6 className='f-w-600'>{item.title}<span className="dot-notification" /></H6>
                                    <P className="f-m-light">{item.text}</P>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
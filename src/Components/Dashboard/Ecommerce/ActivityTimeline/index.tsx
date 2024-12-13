import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { ActivityTimelineTitle } from '../../../../Utils/Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { activityTimelineData } from '../../../../Data/Dashboard/Ecommerce'
import { Badges, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ActivityTimeline() {
    return (
        <Col xxl={3} xl={5} sm={6} className="box-col-6">
            <Card>
                <DropdownWithHeader end headerClass='pb-0 card-no-border' heading={ActivityTimelineTitle} dropDownList={monthlyDropdownList} dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody className="timeline-card">
                    <div className="activity-timeline">
                        {activityTimelineData.map((item) => (
                            <div className="d-flex align-items-start" key={item.id}>
                                <div className="activity-line" />
                                <div className={`activity-dot-${item.color}`} />
                                <div className="flex-grow-1">
                                    <P className="mt-0 todo-font">
                                        <span className={`font-${item.color}`}>{item.date}</span>&nbsp;{item.day}
                                        {item.id === 3 && <Badges color='primary' className="ms-2">{'New'}</Badges>}
                                    </P>
                                    <span className="f-w-700">{item.text}</span>
                                    <P className="mb-0 activity-text">{item.subText}</P>
                                    {item.id === 3 &&
                                        <UL className="img-wrapper simple-list flex-row">
                                            <LI><Image className="img-fluid" src={dynamicImage(`dashboard-2/timeline/5.png`)} alt="" /></LI>
                                            <LI><Image className="img-fluid" src={dynamicImage(`dashboard-2/timeline/6.png`)} alt="" /></LI>
                                        </UL>
                                    }
                                </div>
                                <i className={`fa-solid fa-circle circle-dot-${item.color} pull-right`} />
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
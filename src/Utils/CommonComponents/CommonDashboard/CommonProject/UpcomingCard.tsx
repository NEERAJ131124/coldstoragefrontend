import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../DropdownWithHeader'
import { UpcomingClassesTitle } from '../../../Constants'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { H5, H6, LI, P, UL } from '../../../../AbstractElements'
import { upcomingCardData } from '../../../../Data/Dashboard/Project'
import { UpcomingCardProps } from '../../../../Types/Dashboard.type'

export default function UpcomingCard({ colClass, cardClass }: UpcomingCardProps) {
    return (
        <Col xxl={3} sm={6} className={colClass}>
            <Card className={cardClass ? cardClass : ''}>
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={UpcomingClassesTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="upcoming-class pt-0">
                    {upcomingCardData.map((item) => (
                        <Fragment key={item.id}>
                            <div className="activity-day">
                                <H6>{item.date}</H6>
                            </div>
                            <UL className='simple-list'>
                                {item.child.map((list) => (
                                    <LI className="d-flex align-items-center gap-2" key={list.id}>
                                        <div className="flex-shrink-0">
                                            <H5>{list.time}</H5>
                                        </div>
                                        <div className={`flex-grow-1 border-2 b-l-${list.color}`}>
                                            <H6>{'GDM 2nd semester'}</H6>
                                            <P>{list.text}</P>
                                        </div>
                                        <i className={`fa-solid fa-circle circle-dot-${list.color} pull-right`} />
                                    </LI>
                                ))}
                            </UL>
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
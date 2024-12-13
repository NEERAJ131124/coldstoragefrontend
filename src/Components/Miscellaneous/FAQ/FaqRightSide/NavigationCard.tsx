import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { MessageSquare, Settings } from 'react-feather'
import { Link } from 'react-router-dom'
import { Badges, Btn, H4, LI, UL } from '../../../../AbstractElements'
import { AskQuestion, Navigation } from '../../../../Utils/Constants'
import { navigationData } from '../../../../Data/Miscellaneous/FAQ'

export default function NavigationCard() {
    return (
        <Col lg={12}>
            <Card className="card-mb-faq">
                <CardHeader className="faq-header pb-0"><H4 className='f-w-700'>{Navigation}</H4><Settings /></CardHeader>
                <CardBody className="faq-body">
                    <div className="navigation-btn">
                        <Btn color='primary'>
                            <MessageSquare className="m-r-10" /> {AskQuestion}
                        </Btn>
                    </div>
                    <div className="navigation-option">
                        {navigationData.map((data) => (
                            <Fragment key={data.id}>
                                <UL className='simple-list'>
                                    {data.child.map((item) => (
                                        <LI key={item.id}>
                                            <Link to={item.link}>
                                                {item.icon} {item.text}
                                            </Link>
                                            {item.badge && <Badges color='primary' className='pull-right' pill>{item.badge}</Badges>}
                                        </LI>
                                    ))}
                                </UL>
                                {data.id !== navigationData.length && <hr />}
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
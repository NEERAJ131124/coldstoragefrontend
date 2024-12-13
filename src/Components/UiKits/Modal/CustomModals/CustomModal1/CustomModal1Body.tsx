import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'react-feather'
import { H4, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { demoModalData } from '../../../../../Data/UiKits/Modal'

export default function CustomModal1Body() {
    return (
        <Col xl={12}>
            <Card className="social-profile mb-0">
                <CardBody>
                    <div className="social-img-wrap">
                        <div className="social-img">
                            <Image src={dynamicImage(`avtar/3.jpg`)} alt="profile" />
                        </div>
                        <div className="edit-icon">
                            <div className="icon"><CheckCircle className='stroke-primary' /></div>
                        </div>
                    </div>
                    <div className="social-details">
                        <H4 className="mb-1">
                            <Link to={`${process.env.PUBLIC_URL}/app/social_app`}>{'Brooklyn Simmons'}</Link>
                        </H4>
                        <span className="font-dark">{'@brookly.simmons'}</span>
                        <UL className="social-follow simple-list flex-row justify-content-around">
                            {demoModalData && demoModalData.map((item, index) => (
                                <LI key={index}>
                                    <H4 className="mb-0">{item.class}</H4>
                                    <span className="font-dark">{item.text}</span>
                                </LI>

                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H3, H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { targetCardList } from '../../../../Data/Dashboard/Ecommerce'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function TargetCard() {
    return (
        <Col xxl={3} xl={5} sm={6} className="order-xl-2 order-xxl-0 box-col-6">
            <Card className="target-card overflow-hidden">
                <CardHeader className="card-no-border">
                    <UL className='simple-list flex-row'>
                        {targetCardList.map((item) => (
                            <LI className={`bg-${item.id === 1 ? 'light-primary' : 'primary'} text-center`} key={item.id}>
                                <H3>{item.title}</H3>
                                <P className="mb-0">{item.text}</P>
                                <H6 className={item.id === 1 ? "font-primary" : ""}>{'$638.930'}</H6>
                            </LI>
                        ))}
                    </UL>
                </CardHeader>
                <CardBody className="p-0">
                    <div className="main-img">
                        <Image className="img-fluid img-banner" src={dynamicImage(`dashboard-2/4.png`)} alt="" />
                        <UL className="animate-img simple-list flex-row">
                            {dynamicNumber(5).map((item, index) => (
                                <LI className={`right-${item}`} key={index}>
                                    <Image className="img-fluid" src={dynamicImage(`dashboard-2/animate/${item}.png`)} alt="" />
                                </LI>
                            ))}
                        </UL>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
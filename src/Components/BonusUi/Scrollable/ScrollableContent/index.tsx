import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ScrollableContentTitle } from '../../../../Utils/Constants'
import { scrollContentSubTitle, scrollableContentData } from '../../../../Data/BonusUi/Scrollable'
import { H6, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function ScrollableContent() {
    return (
        <Col xxl={4} md={12}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ScrollableContentTitle} subTitle={scrollContentSubTitle} />
                <CardBody>
                    <Scrollbars className='vertical-scroll scroll-demo scroll-b-none custom-container' autoHide>
                        <UL className='main-lists-content'>
                            {scrollableContentData && scrollableContentData.map((item, index) => (
                                <LI className={`list-group-item-action list-hover-primary ${index === 0 ? 'active' : ''}`} key={index}>
                                    <div className="list-wrapper gap-0">
                                        <Image className="list-img" src={dynamicImage(`user/${item.image}`)} alt="profile" />
                                        <div className="list-content">
                                            <H6>{item.head}</H6>
                                            <P>{item.mail}</P>
                                            <small className={index !== 0 ? 'text-muted' : ''}>{item.small}</small>
                                        </div>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}

import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BothSideScrollbarTitle } from '../../../../Utils/Constants'
import { bothSideScroll, bothSideScrollSubTitle } from '../../../../Data/BonusUi/Scrollable'

export default function BothSideScrollbar() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={BothSideScrollbarTitle} subTitle={bothSideScrollSubTitle} />
                <CardBody>
                    <div className='scroll-bar-wrap'>
                        <Scrollbars className='visible-scroll always-visible scroll-demo custom-container'>
                            <div className='horz-scroll-content scroll-content-width'>
                                <Row>
                                    {bothSideScroll && bothSideScroll.map((item, index) => (
                                        <Col sm={3} key={index}>
                                            {item.text}
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Scrollbars>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

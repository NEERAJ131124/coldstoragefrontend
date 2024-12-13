import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HorizontalScrollbarTitle } from '../../../../Utils/Constants'
import { horizontalScrollSubTitle } from '../../../../Data/BonusUi/Scrollable'
import { Image } from '../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../Utils'

export default function HorizontalScrollbar() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={HorizontalScrollbarTitle} subTitle={horizontalScrollSubTitle} />
                <CardBody>
                    <Scrollbars className="horizontal-scroll scroll-demo custom-container" autoHide>
                        <div className="horz-scroll-content scroll-content-width">
                            <Row>
                                {dynamicNumber(6).map((item, index) => (
                                    <Col xs={2} key={index}>
                                        <div className="horizontal-img">
                                            <Image className="img-fluid" src={dynamicImage(`scrollbar/fashion${item}.jpg`)} alt="girl" />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Scrollbars>
                </CardBody>
            </Card>
        </Col>
    )
}

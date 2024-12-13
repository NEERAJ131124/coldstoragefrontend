import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Scrollbars from 'react-custom-scrollbars-2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { SmallSizeScrollTitle } from '../../../../Utils/Constants'
import { smallSizeScrollSubTitle } from '../../../../Data/BonusUi/Scrollable'
import { H5, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function SmallSizeScroll() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={SmallSizeScrollTitle} subTitle={smallSizeScrollSubTitle} />
                <CardBody>
                    <div className="scroll-bar-wrap">
                        <Scrollbars className="scrollbar-margins large-margin scroll-demo pe-0 custom-container" autoHide>
                            <div className="margin-scrollbar">
                                <H5 className="pb-2">{'Solution for Business Transformation'}</H5>
                            </div>
                            <P>
                                {"The Business Transformation Solution programme is a "}
                                <em className="txt-danger">{'multi-level engagement program'}</em>
                                {" is designed to help Small and Medium-Sized Businesses and Startups create a strong, well-functioning business organization that produces the best results quickly and effectively."}
                                <Image className="img-fluid pt-3" src={dynamicImage(`banner/3.jpg`)} alt="business" />
                            </P>
                            <P>{"The core of the programme is our internally developed "}
                                <em className="txt-danger">{'Business Management model'}</em>
                                {', "Business Foundation & Management", which was tried and true for Indian business conditions while drawing inspiration from other successful global SME Business Management techniques.'}
                            </P>
                        </Scrollbars>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
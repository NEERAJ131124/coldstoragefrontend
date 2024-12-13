import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DisabledSliderTitle } from '../../../../Utils/Constants'
import { disabledSliderSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import DisabledSliderDemo from './DisabledSliderDemo'

export default function DisabledSlider() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={DisabledSliderTitle} subTitle={disabledSliderSubTitle} />
                <CardBody>
                    <DisabledSliderDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
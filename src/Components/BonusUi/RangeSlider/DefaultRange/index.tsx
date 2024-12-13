import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultRangeTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import DefaultRangeDemo from './DefaultRangeDemo'

export default function DefaultRange() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={DefaultRangeTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <DefaultRangeDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
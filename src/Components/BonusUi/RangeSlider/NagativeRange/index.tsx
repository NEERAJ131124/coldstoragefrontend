import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NagativeRangeTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import NagativeRangeDemo from './NagativeRangeDemo'

export default function NagativeRange() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={NagativeRangeTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <NagativeRangeDemo />
                </CardBody>
            </Card>
        </Col>
    )
}

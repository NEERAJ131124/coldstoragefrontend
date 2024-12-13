import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PointFormatedLabelTitle } from '../../../../Utils/Constants'
import PointFormatedDemo from './PointFormatedDemo'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'

export default function PointFormatedLabel() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={PointFormatedLabelTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <PointFormatedDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
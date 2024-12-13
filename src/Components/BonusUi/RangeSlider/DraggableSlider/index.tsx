import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import DraggableDemo from './DraggableDemo'
import { DraggableTitle } from '../../../../Utils/Constants'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'

export default function DraggableSlider() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={DraggableTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <DraggableDemo />
                </CardBody>
            </Card>
        </Col>
    )
}
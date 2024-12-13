import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { OutlineAlertTitle } from '../../../../Utils/Constants'
import { outlineAlertSubTitle } from '../../../../Data/UiKits/Alert'
import ClockAlert from './ClockAlert'
import ThumbsAlert from './ThumbsAlert'

export default function OutlineAlert() {
    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={OutlineAlertTitle} subTitle={outlineAlertSubTitle} />
                <CardBody>
                    <ClockAlert />
                    <ThumbsAlert/>
                </CardBody>
            </Card>
        </Col>
    )
}

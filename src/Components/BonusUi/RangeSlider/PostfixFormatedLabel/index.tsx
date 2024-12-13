import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { defaultRangeSubTitle } from '../../../../Data/BonusUi/RangeSlider'
import PostfixFormatedDemo from './PostfixFormatedDemo'
import { PostfixFormatedLabelTitle } from '../../../../Utils/Constants'

export default function PostfixFormatedLabel() {
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={PostfixFormatedLabelTitle} subTitle={defaultRangeSubTitle} />
                <CardBody>
                    <PostfixFormatedDemo />
                </CardBody>
            </Card>
        </Col>
    )
}

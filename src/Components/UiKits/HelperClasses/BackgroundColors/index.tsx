import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BackgroundColorsTitle } from '../../../../Utils/Constants'
import { backgroundColorSubTitle } from '../../../../Data/UiKits/HelperClasses'
import DarkBackground from './DarkBackground'
import LightBackground from './LightBackground'
import ExtendedBackground from './ExtendedBackground'

export default function BackgroundColors() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={BackgroundColorsTitle} subTitle={backgroundColorSubTitle} />
                <CardBody>
                    <Row className='g-3'>
                        <DarkBackground />
                        <LightBackground />
                        <ExtendedBackground />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BorderStyleTitle } from '../../../../Utils/Constants'
import { borderStyleSubTitle } from '../../../../Data/UiKits/HelperClasses'
import CustomBorder from './CustomBorder'
import BorderColor from './BorderColor'
import BorderWidth from './BorderWidth'
import TextColors from './TextColors'

export default function BorderStyles() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={BorderStyleTitle} subTitle={borderStyleSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <CustomBorder />
                        <BorderColor />
                        <BorderWidth />
                        <TextColors />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

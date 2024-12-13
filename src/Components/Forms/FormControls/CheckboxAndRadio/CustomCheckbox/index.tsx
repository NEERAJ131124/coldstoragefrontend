import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomCheckboxTitle } from '../../../../../Utils/Constants'
import { customCheckBoxSubTitle } from '../../../../../Data/Forms/FormControls'
import BorderedCheckbox from './BorderedCheckbox'
import IconCheckbox from './IconCheckbox'
import FilledCheckbox from './FilledCheckbox'

export default function CustomCheckbox() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={CustomCheckboxTitle} subTitle={customCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        <BorderedCheckbox />
                        <IconCheckbox />
                        <FilledCheckbox />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
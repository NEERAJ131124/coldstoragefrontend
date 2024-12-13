import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomRadiosTitle } from '../../../../../Utils/Constants'
import { customRadioBoxSubTitle } from '../../../../../Data/Forms/FormControls'
import BorderedRadio from './BorderedRadio'
import IconsRadio from './IconsRadio'
import FilledRadio from './FilledRadio'

export default function CustomRadio() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={CustomRadiosTitle} subTitle={customRadioBoxSubTitle} />
                <CardBody className='checkbox-checked'>
                    <Row className="g-3">
                        <BorderedRadio />
                        <IconsRadio />
                        <FilledRadio />
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

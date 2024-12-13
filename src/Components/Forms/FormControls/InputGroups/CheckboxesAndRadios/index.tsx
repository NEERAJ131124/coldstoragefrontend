import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CheckboxesAndRadiosTitle } from '../../../../../Utils/Constants'
import { checkBoxesAndRadiosSubTitle } from '../../../../../Data/Forms/FormControls'

export default function CheckboxesAndRadios() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={CheckboxesAndRadiosTitle} subTitle={checkBoxesAndRadiosSubTitle} />
                <CardBody className="checkbox-checked card-wrapper input-group-wrapper checkbox-radios">
                    <InputGroup>
                        <InputGroupText>
                            <Input className="mt-0" type="checkbox" />
                        </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupText>
                            <Input className="mt-0" type="radio" defaultChecked />
                        </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
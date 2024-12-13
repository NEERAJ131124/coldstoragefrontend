import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultInputText, LargeInput, SizingTitle, SmallInput } from '../../../../../Utils/Constants'
import { sizingSubTitle } from '../../../../../Data/Forms/FormControls'

export default function Sizing() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={SizingTitle} subTitle={sizingSubTitle} />
                <CardBody className="card-wrapper input-group-wrapper">
                    <InputGroup size="sm">
                        <InputGroupText> {SmallInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup>
                        <InputGroupText> {DefaultInputText} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup size="lg">
                        <InputGroupText> {LargeInput} </InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
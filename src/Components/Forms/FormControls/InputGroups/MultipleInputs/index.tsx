import React from 'react'
import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { FirstAndLastName, MultipleInputsTitle } from '../../../../../Utils/Constants'
import { multipleInputsSubTitle } from '../../../../../Data/Forms/FormControls'

export default function MultipleInputs() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={MultipleInputsTitle} subTitle={multipleInputsSubTitle} />
                <CardBody className="common-flex main-custom-form card-wrapper multiple-inputs">
                    <InputGroup>
                        <InputGroupText>{FirstAndLastName}</InputGroupText>
                        <Input type="text" />
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup className='multi-input'>
                        <InputGroupText>{'$'}</InputGroupText>
                        <InputGroupText>{'0.00'}</InputGroupText>
                        <Input type="text" />
                    </InputGroup>
                    <InputGroup className='multi-input-2'>
                        <Input type="text" />
                        <InputGroupText>{'$'}</InputGroupText>
                        <InputGroupText>{'0.00'}</InputGroupText>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
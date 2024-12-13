import React from 'react'
import { Col, Input, InputGroup, InputGroupText } from 'reactstrap'
import { H2, P } from '../../../../../AbstractElements'
import { EmailVerificationTitle, Verify } from '../../../../../Utils/Constants'

export default function EmailVerificationContent() {
    return (
        <Col xxl={8} className="box-col-7">
            <H2>{EmailVerificationTitle}</H2>
            <P>{" A verification code has been sent to your email. This code will be valid for 15 minutes."}</P>
            <InputGroup className="mb-2 basic-form">
                <Input type="text" placeholder="Please enter the code here" />
                <InputGroupText className="bg-primary">{Verify}</InputGroupText>
            </InputGroup>
        </Col>
    )
}
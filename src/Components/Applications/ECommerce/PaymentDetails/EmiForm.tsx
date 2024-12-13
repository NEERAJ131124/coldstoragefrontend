import React from 'react'
import { Col, Form, FormGroup, Input, Row } from 'reactstrap'
import { bankName, paymentOption, selectDuration } from '../../../../Data/Applications/ECommerce/Product'
import { dynamicImage, dynamicNumber } from '../../../../Utils'
import { Btn, Image, LI, UL } from '../../../../AbstractElements'

export default function EmiForm() {
    return (
        <Form className="theme-form">
            <Row>
                <Col xs={6} className="p-r-0">
                    <FormGroup><Input type="text" placeholder="First Name" /></FormGroup>
                </Col>
                <Col xs={6}>
                    <FormGroup><Input type="text" placeholder="Last Name" /></FormGroup>
                </Col>
                <Col xs={6} className="p-r-0">
                    <Input type="number" placeholder="Pincode" />
                </Col>
                <Col xs={6}>
                    <FormGroup>
                        <Input type="select" size={1} >
                            {bankName.map((item, i) => (
                                <option key={i}>{item}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Input type="select" size={1} >
                            <option>{'Select Card'}</option>
                            {dynamicNumber(5).map((item, i) => (
                                <option key={i}>{item}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <Input type="select" size={1} >
                            {selectDuration.map((item, i) => (
                                <option key={i}>{item}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <FormGroup>
                        <UL className="payment-opt simple-list flex-row">
                            {paymentOption.map((item, index) => (
                                <LI key={index}><Image src={dynamicImage(`ecommerce/${item}.png`)} alt="" /></LI>
                            ))}
                        </UL>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <Btn color='primary' block>{'Submit'}</Btn>
                </Col>
            </Row>
        </Form>
    )
}
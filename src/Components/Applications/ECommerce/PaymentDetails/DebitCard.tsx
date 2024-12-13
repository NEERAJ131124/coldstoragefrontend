import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DebitCardTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'
import { selectMonth, selectYear } from '../../../../Data/Applications/ECommerce/Product'

export default function DebitCard() {
    return (
        <Col xxl={4} lg={6} className="box-col-6 debit-card">
            <Card>
                <CommonCardHeader headClass='py-4' title={DebitCardTitle} />
                <CardBody>
                    <Form className="theme-form e-commerce-form">
                        <Row>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup><Input type="text" placeholder="Full name here" /></FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="number" placeholder="Card number" /></FormGroup>
                            </Col>
                            <Col xs={6} className="p-r-0">
                                <FormGroup><Input type="number" placeholder="CVV number" /></FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="number" placeholder="CVC" /></FormGroup>
                            </Col>
                            <Col xs={12}>
                                <Label className="col-form-label p-b-20">{'Expiration Date'}</Label>
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup>
                                    <Input type="select" size={1}>
                                        {selectMonth.map((months, i) => (
                                            <option key={i}>{months}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup>
                                    <Input type="select" size={1}>
                                        {selectYear.map((year, i) => (
                                            <option key={i}>{year}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={12}>
                                <Btn color='primary' block>{'Submit'}</Btn>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
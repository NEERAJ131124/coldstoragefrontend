import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { NetBankingTitle } from '../../../../Utils/Constants'
import { bankName } from '../../../../Data/Applications/ECommerce/Product'
import { Btn } from '../../../../AbstractElements'

export default function NetBanking() {
    return (
        <Col xxl={4} lg={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='py-4' title={NetBankingTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row>
                            <Col xs={12}>
                                <FormGroup><Input type="text" placeholder="AC Holder name" /></FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup><Input type="text" placeholder="Account number" /></FormGroup>
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup>
                                    <Input type="select" size={1} >
                                        {bankName.map((item, i) => (
                                            <option key={i}>{item}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="text" placeholder="ICFC code" /></FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup><Input type="number" placeholder="Enter mobile number" /></FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup><Input type="text" placeholder="Other Details" /></FormGroup>
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
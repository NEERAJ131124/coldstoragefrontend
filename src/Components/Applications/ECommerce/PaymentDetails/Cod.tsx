import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CodTitle } from '../../../../Utils/Constants'
import { Btn } from '../../../../AbstractElements'

export default function Cod() {
    return (
        <Col xxl={4} lg={6} className="box-col-6">
            <Card>
                <CommonCardHeader headClass='py-4' title={CodTitle} />
                <CardBody>
                    <Form className="theme-form">
                        <Row>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup><Input type="text" placeholder="First Name" /></FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="text" placeholder="Last Name" /></FormGroup>
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup><Input type="number" placeholder="Pincode" /></FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="number" placeholder="Enter mobile number" /></FormGroup>
                            </Col>
                            <Col xs={6} className='p-r-0'>
                                <FormGroup><Input type="text" placeholder="State" /></FormGroup>
                            </Col>
                            <Col xs={6}>
                                <FormGroup><Input type="text" placeholder="City" /></FormGroup>
                            </Col>
                            <Col xs={12}>
                                <FormGroup><Input type="textarea" placeholder="Address" /></FormGroup>
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
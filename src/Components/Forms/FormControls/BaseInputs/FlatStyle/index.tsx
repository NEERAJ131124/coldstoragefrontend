import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Cancel, Disabled, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, FlatStyleTitle, Password, Submit, } from '../../../../../Utils/Constants'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'
import { flatStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import { dynamicNumber } from '../../../../../Utils'
import { Btn } from '../../../../../AbstractElements'

export default function FlatStyle() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={FlatStyleTitle} subTitle={flatStyleSubTitle} />
                <CardBody className='basic-form'>
                    <Form className="theme-form flat-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="email">{EmailAddress}</Label>
                                    <Input id="email" type="email" placeholder="name@example.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="pwd">{Password}</Label>
                                    <Input className="mb-3" id="pwd" type="password" placeholder="Password" autoComplete='' />
                                    <Input id="pwdre" type="password" placeholder="Re Enter Password" autoComplete='' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="disable">{Disabled}</Label>
                                    <Input id="disable" type="text" disabled placeholder="Disabled" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <CommonSelectDropdown title={ExampleSelect} options={dynamicNumber(5)} />
                        </Row>
                        <Row>
                            <CommonSelectDropdown title={ExampleMultipleSelect} options={dynamicNumber(5)} multiple={true} />
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="textarea">{ExampleTextarea}</Label>
                                    <Input type="textarea" id="textarea" rows="3" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                    <Btn color='primary' className="me-2 btn-square">{Submit}</Btn>
                                    <Btn color='danger' className='btn-square'>{Cancel}</Btn>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
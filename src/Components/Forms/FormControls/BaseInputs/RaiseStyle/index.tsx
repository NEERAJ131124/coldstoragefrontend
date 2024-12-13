import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Cancel, Disabled, EmailAddress, ExampleMultipleSelect, ExampleSelect, ExampleTextarea, Password, RaiseStyleTitle, Submit } from '../../../../../Utils/Constants'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'
import { edgesInputStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import { dynamicNumber } from '../../../../../Utils'
import { Btn } from '../../../../../AbstractElements'

export default function RaiseStyle() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={RaiseStyleTitle} subTitle={edgesInputStyleSubTitle} />
                <CardBody className='custom-input'>
                    <Form className="theme-form raise-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="raiseemail">{EmailAddress}</Label>
                                    <Input id="raiseemail" type="email" placeholder="name@example.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="raisepwd">{Password}</Label>
                                    <Input id="raisepwd" type="password" placeholder="Password" autoComplete='' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="raisedisable">{Disabled}</Label>
                                    <Input id="raisedisable" type="text" disabled placeholder="Disabled" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row><CommonSelectDropdown title={ExampleSelect} options={dynamicNumber(5)} /></Row>
                        <Row><CommonSelectDropdown title={ExampleMultipleSelect} options={dynamicNumber(5)} multiple={true} /></Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="raisetextarea">{ExampleTextarea}</Label>
                                    <Input type="textarea" id="raisetextarea" rows="3" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                    <Btn color='primary' className="btn-air-light me-2">{Submit}</Btn>
                                    <Btn color='danger' className='btn-air-light'>{Cancel}</Btn>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
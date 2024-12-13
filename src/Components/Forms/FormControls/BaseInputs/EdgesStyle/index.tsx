import React, { FormEvent } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { EmailAddress, Password, EdgesStyleTitle, Disabled, ExampleSelect, ExampleMultipleSelect, ExampleTextarea, Submit, Cancel } from '../../../../../Utils/Constants'
import { edgesInputStyleSubTitle } from '../../../../../Data/Forms/FormControls'
import CommonSelectDropdown from '../Common/CommonSelectDropdown'
import { dynamicNumber } from '../../../../../Utils'
import { Btn } from '../../../../../AbstractElements'

export default function EdgesStyle() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={EdgesStyleTitle} subTitle={edgesInputStyleSubTitle} />
                <CardBody className='custom-input'>
                    <Form className="theme-form edges-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="edgesmail">{EmailAddress}</Label>
                                    <Input id="edgesmail" type="email" placeholder="name@example.com" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="edgespwd">{Password}</Label>
                                    <Input className="btn-pill" id="edgespwd" type="password" placeholder="Password" autoComplete='' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="edgesdisable">{Disabled}</Label>
                                    <Input id="edgesdisable" type="text" disabled placeholder="Disabled" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row><CommonSelectDropdown title={ExampleSelect} options={dynamicNumber(5)} /></Row>
                        <Row><CommonSelectDropdown title={ExampleMultipleSelect} options={dynamicNumber(5)} multiple={true} /></Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label htmlFor="edgestextarea">{ExampleTextarea}</Label>
                                    <Input type="textarea" id="edgestextarea" rows="3" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-end">
                                    <Btn color='primary' className="me-2">{Submit}</Btn>
                                    <Btn color='danger'>{Cancel}</Btn>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}


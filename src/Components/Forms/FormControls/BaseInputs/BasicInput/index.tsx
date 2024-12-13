import React from 'react'
import { Card, CardBody, Col, Form, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicInputTitle, Color, Date, DateTime, File, MaximumLength, Number, PhoneNumber, PlaceHolder, ReadOnly, Textarea, Time, URL } from '../../../../../Utils/Constants'
import { selectSizingSubTitle } from '../../../../../Data/Forms/FormControls'

export default function BasicInput() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={BasicInputTitle} subTitle={selectSizingSubTitle} />
                <CardBody className="basic-form">
                    <Form className="theme-form">
                        <Row className='g-3'>
                            <Col sm={3}>
                                <Label>{PlaceHolder}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="text" placeholder="This is for hint only ..!" />
                            </Col>
                            <Col sm={3}>
                                <Label>{Number}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="number" defaultValue="50" />
                            </Col>
                            <Col sm={3}>
                                <Label>{PhoneNumber}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="tel" defaultValue="91-(999)-999-999" />
                            </Col>
                            <Col sm={3}>
                                <Label>{URL}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="url" defaultValue="https://themeforest.net" />
                            </Col>
                            <Col sm={3}>
                                <Label>{DateTime}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="datetime-local" defaultValue="2024-05-01T00:00" min="2024-05-01T00:00" />
                            </Col>
                            <Col sm={3}>
                                <Label>{Date}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="date" defaultValue="2024-05-01" />
                            </Col>
                            <Col sm={3}>
                                <Label>{Time}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="time" defaultValue="00:00" />
                            </Col>
                            <Col sm={3}>
                                <Label>{File}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="file" />
                            </Col>
                            <Col sm={3}>
                                <Label>{MaximumLength}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type="text" maxLength={6} defaultValue="Content must be in 6 characters" />
                            </Col>
                            <Col sm={3}>
                                <Label>{Color}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input color='#2e8e87' type="color" defaultValue="#2e8e87" />
                            </Col>
                            <Col sm={3}>
                                <Label>{ReadOnly}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input id="staticEmail" type="text" readOnly defaultValue="email@example.com" plaintext />
                            </Col>
                            <Col sm={3}>
                                <Label>{Textarea}</Label>
                            </Col>
                            <Col sm={9}>
                                <Input type='textarea' rows={5} cols={5} placeholder="Default textarea"></Input>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}
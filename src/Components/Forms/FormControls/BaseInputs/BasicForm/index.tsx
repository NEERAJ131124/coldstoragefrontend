import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicFormTitle, EmailAddress, ExampleTextarea } from '../../../../../Utils/Constants'
import { basicFormSubTitle } from '../../../../../Data/Forms/FormControls'

export default function BasicForm() {

    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={BasicFormTitle} subTitle={basicFormSubTitle} />
                <CardBody className='basic-form'>
                    <div className="card-wrapper border rounded-3">
                        <Form>
                            <Row>
                                <FormGroup>
                                    <Label>{EmailAddress}</Label>
                                    <Input type="email" placeholder="name@example.com" />
                                </FormGroup>
                                <div>
                                    <Label>{ExampleTextarea}</Label>
                                    <Input type="textarea" rows={3} />
                                </div>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

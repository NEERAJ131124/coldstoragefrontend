import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, FormText, Input, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { SizingTitle } from '../../../../../Utils/Constants'
import { floatingFormSubTitle } from '../../../../../Data/Forms/FormControls'

export default function Sizing() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={SizingTitle} subTitle={floatingFormSubTitle} />
                <CardBody className="basic-form">
                    <div className="card-wrapper border rounded-3">
                        <Form className='floating-wrapper'>
                            <Row>
                                <FormGroup>
                                    <Input bsSize='lg' type="text" placeholder=".form-control-lg" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" placeholder="Default input" />
                                </FormGroup>
                                <FormGroup>
                                    <Input bsSize='sm' type="text" placeholder=".form-control-sm" />
                                </FormGroup>
                                <FormText id="passwordHelpBlock">{'Your password must be 8-20 characters long, contain letters and numbers.'}</FormText>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
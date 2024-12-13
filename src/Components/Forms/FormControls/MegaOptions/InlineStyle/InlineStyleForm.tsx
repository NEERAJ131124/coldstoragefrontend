import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { inlineStyleFormData } from '../../../../../Data/Forms/FormControls'

export default function InlineStyleForm() {
    return (
        <Form className="mega-inline">
            <Row>
                {inlineStyleFormData.map((data) => (
                    <Col sm={6} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className={`radio radio-${data.color} m-0 w-100`} check>
                                    <Input id={`radio=${data.id}`} type="radio" name="radio1" value="option1" />
                                    <Label className="mb-0 w-100" htmlFor={`radio=${data.id}`} check>
                                        <span className="flex-grow-1">
                                            <span className="mt-0 mega-title-badge">{data.badgeTitle}
                                                <Badges color={data.color} className="pull-right digits">{data.digits}</Badges>
                                            </span>
                                            <span>{data.text}</span>
                                        </span>
                                    </Label>
                                </FormGroup>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Form>
    )
}

import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { solidBorderStyleFormData } from '../../../../../Data/Forms/FormControls'

export default function SolidBorderStyleForm() {
    return (
        <Form className="mega-inline border-style">
            <Row className="flex-column">
                {solidBorderStyleFormData.map((data) => (
                    <Col xs={12} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className="radio radio-primary" check>
                                    <Input id={`radio-${data.id}`} type="radio" name="radio1" value="option1" />
                                    <Label className="my-0" htmlFor={`radio-${data.id}`} check>
                                        <span className="flex-grow-1">
                                            <span className="d-flex list-behavior-1">
                                                <span className="flex-shrink-0">
                                                    <Image className="tab-img img-fluid" src={dynamicImage(`blog/${data.image}`)} alt="home" />
                                                </span>
                                                <span className="flex-grow-1">
                                                    <span className="mb-0">{data.spanText}</span>
                                                </span>
                                            </span>
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
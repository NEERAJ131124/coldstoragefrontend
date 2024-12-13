import React from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Badges } from '../../../../../AbstractElements'
import { withoutBordersStyleFormData } from '../../../../../Data/Forms/FormControls'

export default function WithoutBordersStyleForm() {
    return (
        <Form className="mega-inline plain-style">
            <Row>
                {withoutBordersStyleFormData.map((data) => (
                    <Col sm={6} key={data.id}>
                        <Card>
                            <div className="d-flex p-20">
                                <FormGroup className={`checkbox checkbox-${data.color} m-0"`} check>
                                    <Input id={`checkbox${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                                    <Label htmlFor={`checkbox${data.id}`} check>
                                        <span className="flex-grow-1 megaoption-space">
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
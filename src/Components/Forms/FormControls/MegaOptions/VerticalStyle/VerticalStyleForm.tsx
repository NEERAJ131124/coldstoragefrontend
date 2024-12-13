import React, { Fragment } from 'react'
import { Card, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Badges, P } from '../../../../../AbstractElements'
import { verticalStyleFormData } from '../../../../../Data/Forms/FormControls'

export default function VerticalStyleForm() {
    return (
        <Form className="mega-vertical">
            <Row>
                {verticalStyleFormData.map((data) => (
                    <Fragment key={data.id}>
                        <Col sm={12}>
                            <P className="mega-title mb-3">{data.megaTitle}</P>
                        </Col>
                        {data.child.map((item) => (
                            <Col sm={6} key={item.id}>
                                <Card className={item.cardClass}>
                                    <div className="d-flex p-20">
                                        <FormGroup className={`radio radio-${item.color} m-0 w-100`} check>
                                            <Input id={`radios${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                                            <Label className="mb-0 w-100" htmlFor={`radios${item.id}`} check>
                                                <span className={`flex-grow-1 ${item.mediaBodyClass ? item.mediaBodyClass : ""}`}>
                                                    <span className="mt-0 mega-title-badge">{item.badgeTitle}
                                                        <Badges color={item.color} className="pull-right digits">{item.digits}</Badges>
                                                    </span>
                                                    <span className={item.spanClass}>
                                                        {item.star &&
                                                            item.star.map((star) => (<i key={star.id} className={`fa-solid fa-star ${star.class ? star.class : ''}`}></i>))}
                                                        {item.spanText}
                                                    </span>
                                                </span>
                                            </Label>
                                        </FormGroup>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Fragment>
                ))}
            </Row>
        </Form>
    )
}

import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultRadioTitle } from '../../../../../Utils/Constants'
import { defaultRadioData, defaultRadioSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6 } from '../../../../../AbstractElements'

export default function DefaultRadio() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={DefaultRadioTitle} subTitle={defaultRadioSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {defaultRadioData.map((item) => (
                            <Col sm={item.id === 3 ? 12 : 6} xl={4} key={item.id}>
                                <div className={`card-wrapper border rounded-3 checkbox-checked ${item.id !== 3 ? 'default-radio' : ''}`}>
                                    <H6 className="sub-title">{item.title}</H6>
                                    {item.child.map((list, index) => (
                                        <FormGroup key={index} className={list.groupClass ? list.groupClass : ''} check>
                                            <Input id={`flexRadio${list.id}`} type="radio" name={list.name} defaultChecked={list.check ? true : false} disabled={list.disabled ? true : false} />
                                            <Label htmlFor={`flexRadio${list.id}`} check>{list.labelText}</Label>
                                        </FormGroup>
                                    ))}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
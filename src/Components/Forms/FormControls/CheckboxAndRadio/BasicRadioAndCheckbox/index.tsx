import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicRadioAndCheckboxTitle } from '../../../../../Utils/Constants'
import { basicCheckboxRadioData, basicRadioAndCheckBoxSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6 } from '../../../../../AbstractElements'

export default function BasicRadioAndCheckbox() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={BasicRadioAndCheckboxTitle} subTitle={basicRadioAndCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {basicCheckboxRadioData.map((data) => (
                            <Col md={12} key={data.id}>
                                <div className={`card-wrapper border rounded-3 checkbox-checked ${data.divClass}`}>
                                    <H6 className="sub-title">{data.title}</H6>
                                    <div className="form-check-size">
                                        {data.child.map((item) => (
                                            <FormGroup key={item.id} className={item.formGroupClass} check inline>
                                                <Input id={`inline-${item.id}`} type={item.type} defaultChecked={item.check ? true : false}
                                                    name={item.type === 'radio' ? item.name : ''} />
                                                <Label htmlFor={`inline-${item.id}`} className={item.id === 2 ? 'mb-0' : ''} check>
                                                    {item.text}
                                                </Label>
                                            </FormGroup>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </CardBody>
            </Card>
        </Col >
    )
}
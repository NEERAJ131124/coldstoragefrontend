import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultCheckboxTitle, Indeterminate, IndeterminateCheckbox } from '../../../../../Utils/Constants'
import { defaultCheckBoxSubTitle, defaultCheckboxData } from '../../../../../Data/Forms/FormControls'
import { H6 } from '../../../../../AbstractElements'

export default function DefaultCheckbox() {
    return (
        <Col xs={12}>
            <Card>
                <CommonCardHeader title={DefaultCheckboxTitle} subTitle={defaultCheckBoxSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {defaultCheckboxData.map((data) => (
                            <Col sm={6} xl={4} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked">
                                    <H6 className="sub-title">{data.title}</H6>
                                    {data.child.map((item) => (
                                        <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ''} check>
                                            <Input id={item.id} className='primary' type="checkbox" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                                            <Label htmlFor={item.id} check>{item.labelText}</Label>
                                        </FormGroup>
                                    ))}
                                </div>
                            </Col>
                        ))}
                        <Col sm={6} xl={12}>
                            <div className="card-wrapper border rounded-3 checkbox-checked">
                                <H6 className="sub-title">{Indeterminate}</H6>
                                <FormGroup check>
                                    <Input id="flexCheckIndeterminate" className='primary' type="checkbox" />
                                    <Label htmlFor="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}
import React, { Fragment } from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { AnimatedButtonsTitle } from '../../../../../Utils/Constants'
import { animatedButtonsData, animatedButtonsSubTitle } from '../../../../../Data/Forms/FormControls'
import { H6 } from '../../../../../AbstractElements'

export default function AnimatedButtons() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={AnimatedButtonsTitle} subTitle={animatedButtonsSubTitle} />
                <CardBody>
                    <Row className="g-3">
                        {animatedButtonsData.map((data) => (
                            <Col sm={6} key={data.id}>
                                <div className="card-wrapper border rounded-3 checkbox-checked animated-button">
                                    <H6 className="sub-title">{data.title}</H6>
                                    {data.child.map((item) => (
                                        <Fragment key={item.id}>
                                            <Label className="d-block">
                                                <Input className={`${item.type}_animated`} type={item.type}
                                                    defaultChecked={item.check === 'checked'} name={item.type === 'radio' ? item.name : ''} />
                                                    {item.text}
                                            </Label>
                                        </Fragment>
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
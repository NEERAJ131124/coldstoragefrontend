import React from 'react'
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { ReactstrapCalendarTitle } from '../../../../../Utils/Constants'
import { reactstrapCalendarData } from '../../../../../Data/Forms/FormWidgets'

export default function ReactstrapCalendar() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={ReactstrapCalendarTitle} />
                <CardBody className="card-wrapper">
                    {reactstrapCalendarData.map((data) => (
                        <Row key={data.id} className={data.id !== 5 ? 'mb-3' : ''}>
                            <Col md={3}>
                                <Label className="col-form-label">{data.labelText}</Label>
                            </Col>
                            <Col md={9}>
                                <Input className="digits" type={data.type} defaultValue={data.value} />
                            </Col>
                        </Row>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
import React from 'react'
import { Col, Form, Label, Row } from 'reactstrap'
import Cleave from 'cleave.js/react'
import { H6 } from '../../../../AbstractElements'
import { HourMonthType, TimeFormatTitle, TimeFormatType } from '../../../../Utils/Constants'

export default function TimeFormat() {
    return (
        <Col sm={6} >
            <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                <H6 className="sub-title">{TimeFormatTitle}</H6>
                <Form>
                    <Row className="g-3">
                        <Col xs={12} className='mt-2'>
                            <Label className="col-form-label">{TimeFormatType}</Label>
                            <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m", "s"] }} placeholder="hh:mm:ss" />
                        </Col>
                        <Col xs={12} className='mt-2'>
                            <Label className="col-form-label">{HourMonthType}</Label>
                            <Cleave className="form-control" options={{ time: true, timePattern: ["h", "m"] }} placeholder="hh:mm" />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    )
}

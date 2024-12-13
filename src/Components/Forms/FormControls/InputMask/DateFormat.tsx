import React from 'react'
import { Col, Form, Label, Row } from 'reactstrap'
import Cleave from "cleave.js/react";
import { H6 } from '../../../../AbstractElements'
import { Date, DateFormatTitle, DateFormatType } from '../../../../Utils/Constants'

export default function DateFormat() {
    return (
        <Col sm={6} >
            <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                <H6 className="sub-title">{DateFormatTitle}</H6>
                <Form>
                    <Row className='g-3'>
                        <Col xs={12} className='mt-2'>
                            <Label className="col-form-label" >{Date}</Label>
                            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["d", "m", "Y"], }} placeholder="DD-MM-YYYY" />
                        </Col>
                        <Col xs={12} className='mt-2'>
                            <Label className="col-form-label">{DateFormatType}</Label>
                            <Cleave className="form-control" options={{ date: true, delimiter: "-", datePattern: ["m", "Y"] }} placeholder="MM-YYYY" />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    )
}
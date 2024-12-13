import React from 'react'
import { Col, Form, Label, Row } from 'reactstrap'
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us.js';
import { H6 } from '../../../../AbstractElements'
import { CardNumber, Currency, DefaultInputMaskTitle, Delimiter, PhoneNumber, Prefix, Tailprefix } from '../../../../Utils/Constants'

export default function DefaultInputMask() {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                <H6 className="sub-title">{DefaultInputMaskTitle}</H6>
                <Form>
                    <Row className='g-3'>
                        <Col xxl={4} sm={6} className='mt-2'>
                            <Label className="col-form-label">{Currency}</Label>
                            <Cleave className="form-control" options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} placeholder="Enter number" />
                        </Col>
                        <Col xxl={4} sm={6} className='mt-2'>
                            <Label className="col-form-label" >{Prefix}</Label>
                            <Cleave className="form-control" options={{ prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true }} placeholder="PREFIX-" />
                        </Col>
                        <Col xxl={4} sm={6} className='mt-2'>
                            <Label className="col-form-label">{Delimiter}</Label>
                            <Cleave className="form-control" options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3], uppercase: true }} placeholder="xxx·xxx·xxx" />
                        </Col>
                        <Col xxl={4} sm={6} className='mt-4'>
                            <Label>{PhoneNumber}</Label>
                            <Cleave className="form-control" options={{ phone: true, phoneRegionCode: 'US' }} placeholder="(xxx)xxx-xxxx" />
                        </Col>
                        <Col xxl={4} sm={6} className='mt-4'>
                            <Label>{CardNumber}</Label>
                            <Cleave className="form-control" options={{ creditCard: true }} placeholder="xxxx xxxx xxxx xxxx" />
                        </Col>
                        <Col xxl={4} sm={6} className='mt-4'>
                            <Label>{Tailprefix}</Label>
                            <Cleave className="form-control" options={{ prefix: '€', tailPrefix: true, numeral: true, numeralThousandsGroupStyle: 'thousand' }} placeholder="0000.00€" />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Col>
    )
}

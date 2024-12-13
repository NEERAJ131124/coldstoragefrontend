import React, { useState } from 'react'
import { Col, InputGroup, Label, Row } from 'reactstrap';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { Range } from '../../../../../Utils/Constants';

export default function DateRange() {
    const [value, setValue] = useState<DateObject[]>([new DateObject()]);

    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{Range}</Label>
            </Col>
            <Col xxl={9}>
                <InputGroup className="flatpicker-calender">
                    <DatePicker
                        inputClass="form-control"
                        range value={value}
                        onChange={(dates) => setValue(dates as DateObject[])}
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
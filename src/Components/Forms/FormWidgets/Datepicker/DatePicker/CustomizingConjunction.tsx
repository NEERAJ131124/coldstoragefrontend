import React, { useState } from 'react'
import { Col, InputGroup, Label, Row } from 'reactstrap';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { CustomizingConjunctionTitle } from '../../../../../Utils/Constants';

export default function CustomizingConjunction() {
    const [value, setValue] = useState<DateObject[]>([new DateObject()]);

    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{CustomizingConjunctionTitle}</Label>
            </Col>
            <Col xxl={9}>
                <InputGroup className="flatpicker-calender">
                    <DatePicker
                        inputClass="form-control"
                        multiple
                        dateSeparator="::"
                        value={value}
                        onChange={(dates) => setValue(dates as DateObject[])}
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
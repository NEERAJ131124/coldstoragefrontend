import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { DisabledDates } from '../../../../../Utils/Constants';

export default function DisabledDatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const today = new Date();
    const disabledDates: Date[] = [today];

    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{DisabledDates}</Label>
            </Col>
            <Col xxl={9}>
                <InputGroup className="flatpicker-calender">
                    <DatePicker
                        className="form-control"
                        selected={selectedDate}
                        onChange={(date: Date) => setSelectedDate(date)}
                        excludeDates={disabledDates}
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
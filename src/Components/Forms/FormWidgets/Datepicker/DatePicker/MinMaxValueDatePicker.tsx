import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { MinMaxValue } from '../../../../../Utils/Constants';

export default function MinMaxValueDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{MinMaxValue}</Label>
            </Col>
            <Col xxl={9}>
                <InputGroup className="flatpicker-calender">
                    <DatePicker
                        className="form-control flatpickr-input"
                        dateFormat="dd.MM.yyyy"
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        minDate={new Date()}
                        maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
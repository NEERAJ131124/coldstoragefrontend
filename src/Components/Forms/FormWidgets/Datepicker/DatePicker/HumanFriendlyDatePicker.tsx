import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { HumanFriendly } from '../../../../../Utils/Constants';

export default function HumanFriendlyDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date: Date) => {
        setStartDate(date);
    };

    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{HumanFriendly}</Label>
            </Col>
            <Col xxl={9}>
                <InputGroup className="flatpicker-calender">
                    <DatePicker
                        className="form-control flatpickr-input"
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="MMMM dd,yyyy"
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
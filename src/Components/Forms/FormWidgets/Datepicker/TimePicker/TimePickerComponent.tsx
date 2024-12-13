import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from 'reactstrap';
import { TimePickerComponentProp } from '../../../../../Types/Forms.type';

export default function TimePickerComponent({ title }: TimePickerComponentProp) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{title}</Label>
            </Col>
            <Col xxl={9} className="box-col-12">
                <InputGroup>
                    <DatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}

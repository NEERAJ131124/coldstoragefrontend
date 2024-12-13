import React from 'react'
import { Col, InputGroup, Label, Row } from 'reactstrap'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { HourPicker } from '../../../../../Utils/Constants'

export default function HourPickerComponent() {
    return (
        <Row>
            <Col xxl={3} className="box-col-12 text-start">
                <Label>{HourPicker}</Label>
            </Col>
            <Col xxl={9} className="box-col-12">
                <InputGroup>
                    <DatePicker
                        inputClass="form-control"
                        disableDayPicker
                        format="HH:mm"
                        plugins={[<TimePicker hideSeconds key={"TimePicker"} />]}
                    />
                </InputGroup>
            </Col>
        </Row>

    )
}
import React from 'react'
import { Card, CardBody, Col, Form, InputGroup, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { DateWithTime, PreloadingTime, TimePickerLimits, TimePickerMinMaxRange, TimePickerRange, TimePickerTitle } from '../../../../../Utils/Constants';
import TimePickerComponent from './TimePickerComponent';
import HourPickerComponent from './HourPickerComponent';
import TimePickerWithLimitedTime from './TimePickerWithLimitedTime';

export default function TimePicker() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={TimePickerTitle} />
                <CardBody className="main-flatpickr">
                    <div className="card-wrapper border rounded-3">
                        <Form className="timepicker-wrapper" onSubmit={handleSubmit}>
                            <TimePickerComponent title={TimePickerTitle} />
                            <HourPickerComponent />
                            <TimePickerComponent title={TimePickerLimits} />
                            <TimePickerComponent title={PreloadingTime} />
                            <Row>
                                <Col xxl={3} className="box-col-12 text-start"><Label>{TimePickerRange}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3} className="box-col-12 text-start"><Label>{TimePickerMinMaxRange}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col xxl={3} className="box-col-12 text-start"><Label>{DateWithTime}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
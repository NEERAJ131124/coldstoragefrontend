import React from 'react'
import { Card, CardBody, Col, Form, InputGroup, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { DatePickerCardTitle, DefaultDate, PreloadingDates } from '../../../../../Utils/Constants'
import DatePickerComponent from './DatePickerComponent'
import HumanFriendlyDatePicker from './HumanFriendlyDatePicker'
import MinMaxValueDatePicker from './MinMaxValueDatePicker'
import DisabledDatePicker from './DisabledDatePicker'
import MultiplesDates from './MultiplesDates'
import CustomizingConjunction from './CustomizingConjunction'
import DateRange from './DateRange'

export default function DatePicker() {
    return (
        <Col xl={6} className='mb-lg-3'>
            <Card>
                <CommonCardHeader title={DatePickerCardTitle} />
                <CardBody className="main-flatpickr">
                    <div className="card-wrapper border rounded-3">
                        <Form className="timepicker-wrapper">
                            <Row>
                                <Col xxl={3} className="text-start"><Label>{DefaultDate}</Label></Col>
                                <Col xxl={9} className="box-col-12">
                                    <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                            <HumanFriendlyDatePicker />
                            <MinMaxValueDatePicker />
                            <DisabledDatePicker />
                            <MultiplesDates />
                            <CustomizingConjunction />
                            <DateRange />
                            <Row>
                                <Col xxl={3} className="box-col-12 text-start"><Label>{PreloadingDates}</Label></Col>
                                <Col xxl={9}>
                                    <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
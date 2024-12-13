import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultCalendar from './DefaultCalendar'
import ReactstrapCalendar from './ReactstrapCalendar'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { DatepickerTitle, FormWidgetsTitle } from '../../../../Utils/Constants'

export default function DatePickerContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={DatepickerTitle} parent={FormWidgetsTitle} title={DatepickerTitle} />
            <Container fluid className='date-picker-page'>
                <Row>
                    <DefaultCalendar />
                    <ReactstrapCalendar />
                    <DatePicker />
                    <TimePicker />
                </Row>
            </Container>
        </>
    )
}
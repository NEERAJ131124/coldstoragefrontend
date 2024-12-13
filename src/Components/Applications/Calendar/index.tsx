import React from 'react'
import { Card, CardBody, Container, Row } from 'reactstrap'
import DraggableEvents from './DraggableEvents'
import DefaultCalendar from './DefaultCalendar'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ApplicationTitle, CalenderBasicTitle } from '../../../Utils/Constants'

export default function CalendarContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={CalenderBasicTitle} parent={ApplicationTitle} title={CalenderBasicTitle} />
            <Container className='calendar-basic' fluid>
                <Card>
                    <CardBody>
                        <Row>
                            <DraggableEvents />
                            <DefaultCalendar />
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}
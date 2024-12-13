import React, { useState } from 'react'
import { Col, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../../../AbstractElements';
import { CalendarFilter, DraggableEventsTitle, RemoveAfterDrop } from '../../../../Utils/Constants';
import { calendarInitialState } from '../../../../Data/Applications/Calendar';

export default function DraggableEvents() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); }
    return (
        <Col xxl={3} className="box-col-12">
            <div className="md-sidebar mb-3">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{CalendarFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div id="external-events">
                        <H4>{DraggableEventsTitle}</H4>
                        <div id="external-events-list">
                            {calendarInitialState.events.map((event) => (
                                <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event' id={event.id} title={event.title} key={event.id}>
                                    <div className="fc-event-main">
                                        <i className={`me-2 fa-solid fa-${event.icon}`}></i>
                                        {event.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <P>
                            <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
                            <Label htmlFor="drop-remove">{RemoveAfterDrop}</Label>
                        </P>
                    </div>
                </div>
            </div>
        </Col>
    )
}
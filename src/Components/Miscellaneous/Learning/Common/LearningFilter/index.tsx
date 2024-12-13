import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Btn } from '../../../../../AbstractElements';
import { LearningFilterTitle } from '../../../../../Utils/Constants';
import FindCourseCard from './FindCourseCard';
import Categories from './Categories';
import UpcomingCourses from './UpcomingCourses';

export default function LearningFilter() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open); }
    return (
        <Col xl={3} className="xl-40 box-col-12 learning-filter learning-card">
            <div className='md-sidebar'>
                <Btn onClick={toggle} color='primary' className='email-aside-toggle md-sidebar-toggle'>{LearningFilterTitle}</Btn>
                <div className={`md-sidebar-aside job-sidebar ${open ? 'open' : ''}`}>
                    <div className='default-according style-1 faq-accordion job-accordion accordion accordion-flush' id='accordionoc'>
                        <Row>
                            <FindCourseCard />
                            <Categories />
                            <UpcomingCourses />
                        </Row>
                    </div>
                </div>
            </div>
        </Col>
    )
}
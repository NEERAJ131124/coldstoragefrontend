import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';
import { Btn, H5 } from '../../../../../AbstractElements';
import { Href, UpcomingCoursesTitle } from '../../../../../Utils/Constants';
import { upcomingCoursesData } from '../../../../../Data/Miscellaneous/Learning';

export default function UpcomingCourses() {
    const [isDevelopment, setIsDevelopment] = useState(true);
    const toggle = () => { setIsDevelopment(!isDevelopment); }
    return (
        <Col xl={12}>
            <Card>
                <CardHeader>
                    <H5 className="mb-0">
                        <Btn color='transparent' className='btn-link d-flex align-items-center gap-2 justify-content-between' onClick={toggle}>
                            {UpcomingCoursesTitle} {isDevelopment ? <ChevronDown /> : <ChevronUp />}
                        </Btn>
                    </H5>
                </CardHeader>
                <Collapse isOpen={isDevelopment}>
                    <CardBody className="upcoming-course">
                        {upcomingCoursesData.map((data) => (
                            <div className="d-flex" key={data.id}>
                                <div className="flex-grow-1">
                                    <span className="f-w-700">{data.title}</span>
                                    <span className="d-block">{"Course By "} <a href={Href}> {data.anchorText}</a></span>
                                    <span className="d-block">
                                        {data.star.map((item) => (
                                            <i key={item.id} className={`fa-regular fa-${item.class} font-warning`}></i>
                                        ))}
                                    </span>
                                </div>
                                <div>
                                    <H5 className="mb-0 font-primary">{data.value}</H5>
                                    <span className="d-block">{data.month}</span>
                                </div>
                            </div>
                        ))}
                    </CardBody>
                </Collapse>
            </Card>
        </Col>
    )
}
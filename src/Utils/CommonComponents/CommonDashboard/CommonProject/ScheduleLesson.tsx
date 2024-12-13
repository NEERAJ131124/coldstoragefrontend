import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactDatePicker from "react-datepicker";
import DropdownWithHeader from '../../DropdownWithHeader'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { ScheduleLessonTitle } from '../../../Constants'
import { ScheduleLessonProp } from '../../../../Types/Dashboard.type'

export default function ScheduleLesson({ colClass }: ScheduleLessonProp) {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date: Date) => {
        setStartDate(date);
    };
    return (
        <Col sm={6} className={colClass}>
            <Card className="overflow-hidden">
                <DropdownWithHeader end headerClass='card-no-border pb-0' heading={ScheduleLessonTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={monthlyDropdownList} />
                <CardBody className="p-0">
                    <div className="default-datepicker">
                        <div className="datepicker-here">
                            <ReactDatePicker
                                selected={startDate}
                                onChange={handleChange}
                                inline
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

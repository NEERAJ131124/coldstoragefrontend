import React, { useState } from 'react'
import { Col, FormGroup } from 'reactstrap';
import DatePicker from "react-datepicker";
import { EndingDate, StartingDate } from '../../../../../Utils/Constants';
import { H5 } from '../../../../../AbstractElements';

export default function StartEndDate() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleStartDate = (date: Date) => {
        setStartDate(date);
    };
    const handleEndDate = (date: Date) => {
        setEndDate(date);
    };
    return (
        <>
            <Col sm={4}>
                <FormGroup className='d-flex flex-column align-items-stretch'>
                    <H5 className="f-w-600 mb-2">{StartingDate}</H5>
                    <DatePicker className="form-control" selected={startDate} onChange={handleStartDate} />
                </FormGroup>
            </Col>
            <Col sm={4}>
                <FormGroup className='d-flex flex-column align-items-stretch'>
                    <H5 className="f-w-600 mb-2">{EndingDate}</H5>
                    <DatePicker className="form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
                </FormGroup>
            </Col>
        </>
    )
}
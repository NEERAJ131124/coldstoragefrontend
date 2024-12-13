import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import { Typeahead } from 'react-bootstrap-typeahead';
import { H6 } from '../../../../../AbstractElements';
import { CompanyName, Location, Period, Position, YourExperienceTitle } from '../../../../../Utils/Constants';
import { positions } from '../../../../../Data/Miscellaneous/JobSearch';

export default function YourExperience() {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    const handleDateChange = (date: Date, index: number) => {
        const updatedDates = [...selectedDates]; updatedDates[index] = date;
        setSelectedDates(updatedDates);
    };
    return (
        <>
            <H6 className="mb-0">{YourExperienceTitle}</H6>
            <Form className="theme-form">
                <Row className='select-date'>
                    <Col xl={6} className="xl-100">
                        <FormGroup>
                            <Label htmlFor="exampleFormControlInput7">{Location}:<span className="font-danger">{'*'}</span></Label>
                            <Input id="exampleFormControlInput7" type="text" placeholder="Enter Location" />
                        </FormGroup>
                    </Col>
                    <Col xl={6} className="xl-100 xl-mt-job">
                        <Col><Label className='text-end pt-0'>{Period}:<span className='font-danger'>{'*'}</span></Label></Col>
                        <Row>
                            <Col sm={6}>
                                <InputGroup>
                                    <ReactDatePicker className="form-control digits" placeholderText="Start Date" selected={selectedDates[0]} onChange={(date) => handleDateChange(date as Date, 0)} />
                                </InputGroup>
                            </Col>
                            <Col sm={6} className="xs-mt-period">
                                <InputGroup>
                                    <ReactDatePicker className='form-control digits' placeholderText="End Date" selected={selectedDates[1]} onChange={(date) => handleDateChange(date as Date, 1)} />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6} className="xl-100">
                        <FormGroup>
                            <Col><Label className='pt-0'>{Position}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Typeahead id='basic-typeahead' labelKey='name' options={positions} placeholder='Enter Position' />
                        </FormGroup>
                    </Col>
                    <Col xl={6} className="xl-100">
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput8'>{CompanyName}:<span className='font-danger'>{'*'}</span></Label>
                            <Input id='exampleFormControlInput8' type='text' placeholder='Enter Company Name' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}